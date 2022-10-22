const BaseController = require("./baseController");
const { Op } = require("sequelize");

class UserController extends BaseController {
  constructor(model, listingModel) {
    super(model);
    this.listingModel = listingModel;
  }

  // add the buyer Id to the listing - how do i get the buyerId?
  // through Auth0 autentication, can get their email
  // then use the email to query the Users model to get the id?

  //maybe smth like
  // const userEmail = this.userModel.findOne({where:{email: user.email}})
  // if (userEmail) {
  // const key = get id

  //then update the buyer id
  //}
  // return res.json(bought)

  // getting items from the user inventory
  // filter boolean = true && buyerId to show user inventory
  async getInventory(req, res) {
    const buyerId = req.params.buyerId;
    try {
      console.log(this.listingModel);
      const output = await this.listingModel.findAll({
        where: {
          [Op.and]: [{ buyer_id: buyerId }, { bought: true }],
        },
      });
      return res.json(output);

      // console.log("retrieved!");
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async insertUser(req, res) {
    const { email, password, username } = req.body;

    try {
      const newUser = await this.model.create({
        email: email,
        password: password,
        username: username,
      });

      //return with res.json
      return res.json(newUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UserController;
