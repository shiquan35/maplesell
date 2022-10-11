const BaseController = require("./baseController");

class ListingController extends BaseController {
  constructor(model, categoryModel, shopModel) {
    super(model);
    this.categoryModel = categoryModel;
    this.shopModel = shopModel;
  }

  // getting items from a specfic shop
  // filter boolean = false to show the remaining items left
  async getShop(req, res) {
    const shopId = req.params.shopId;
    try {
      console.log("getting items...");
      if (shopId) {
        const output = await this.model.findAll({
          where: {
            boolean: false,
          },
        });
        return res.json(output);
      }
      console.log("got items!");
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // when the user clicks on a specific item
  // rmb that the params for the router is :listingsId
  // ensure that it is the listingsId
  async getOne(req, res) {
    const listingId = req.params.listingId;
    try {
      console.log("getOne works");
      const output = await this.model.findByPk(listingId);
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // POST request, (PUT might be possible too)
  // you are updating a data field here
  async soldOne(req, res) {
    const listingId = req.params.listingId;
    try {
      const soldItem = await this.model.findByPk(listingId);
      console.log("selling...");
      if (soldItem) {
        // if sold, update boolean to true
        await this.model.update(
          { bought: true },
          {
            where: {
              bought: false,
            },
          }
        );
      }
      console.log("sold!");
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // allowing users to add their own listings
  async insertOne(req, res) {
    const { name, price, description, selectedShopId, selectedCategoryId } =
      req.body;

    try {
      const newListing = await this.model.create({
        name: name,
        price: price,
        description: description,
      });

      //retrieving the shop and category ids
      const selectedCategories = await this.categoryModel.findAll({
        where: {
          id: selectedCategoryId,
        },
      });

      //associate the selected category to the listing
      const assocCategory = newListing.setCategories(selectedCategories);

      //retrieve the shop id
      const selectedShop = await this.shopModel.findAll({
        where: {
          id: selectedShopId,
        },
      });

      //associate to the shop id
      const assocShop = assocCategory.setShops(selectedShop);

      //return with res.json
      return res.json(assocShop);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ListingController;