const BaseController = require("./baseController");

class CategoryController extends BaseController {
  constructor(model) {
    super(model);
  }

  async getCategoryName(req, res) {
    try {
      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = CategoryController;
