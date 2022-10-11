const BaseController = require("./baseController");

class UserController extends BaseController {
  constructor(model, userModel) {
    super(model);
    this.userModel = userModel;
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
      console.log("retrieving user inventory");
      if (buyerId) {
        const output = await this.model.findAll({
          where: {
            bought: true,
          },
        });
        return res.json(output);
      }
      console.log("retrieved!");
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UserController;
