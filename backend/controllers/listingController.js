const BaseController = require("./baseController");
const { Op } = require("sequelize");

class ListingController extends BaseController {
  constructor(model, categoryModel, shopModel, photoModel) {
    super(model);
    this.categoryModel = categoryModel;
    this.shopModel = shopModel;

    // get photos
    this.photoModel = photoModel;
  }

  async getShop(req, res) {
    try {
      const output = await this.shopModel.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // get shop items
  async getShopItem(req, res) {
    const shopId = req.params.shopId;
    try {
      const output = await this.model.findAll({
        where: {
          [Op.and]: [{ shop_id: shopId }, { bought: false }],
        },
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // get photo URLs
  async getPhoto(req, res) {
    try {
      const output = await this.photoModel.findAll();
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
      const soldItem = await this.model.findAll({
        where: {
          listing_id: listingId,
        },
      });
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
    const { name, price, description, category_id, shop_id } = req.body;

    try {
      const newListing = await this.model.create({
        name: name,
        price: price,
        description: description,
        category_id: category_id,
        shop_id: shop_id,
      });

      console.log(category_id);
      console.log(shop_id);

      //return with res.json
      return res.json(newListing);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ListingController;
