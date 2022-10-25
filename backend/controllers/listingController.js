const BaseController = require("./baseController");
const { Op } = require("sequelize");

class ListingController extends BaseController {
  constructor(model, categoryModel, shopModel) {
    super(model);
    this.categoryModel = categoryModel;
    this.shopModel = shopModel;
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
    const { id, bought, buyer_id } = req.body;
    console.log(req.body);
    try {
      const output = await this.model.update(
        { buyer_id: 8, bought: bought },
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
}

module.exports = ListingController;
