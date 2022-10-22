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

  async soldOne(req, res) {
    const { id, bought } = req.body;
    try {
      const output = await this.model.update(
        { bought: bought },
        {
          where: {
            id: id,
          },
        }
      );
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // allowing users to add their own listings
  async insertOne(req, res) {
    const { name, price, description, category_id, shop_id, photo } = req.body;

    try {
      const newListing = await this.model.create({
        name: name,
        price: price,
        description: description,
        category_id: category_id,
        shop_id: shop_id,
        photo: photo,
      });

      //return with res.json
      return res.json(newListing);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ListingController;
