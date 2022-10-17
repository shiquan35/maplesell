const express = require("express");
const router = express.Router();

class ListingsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getShop.bind(this.controller));
    router.post("/", this.controller.insertOne.bind(this.controller));
    router.get("/:shopId", this.controller.getShopItem.bind(this.controller));
    router.get("/:shopId/:listingId", this.controller.getOne.bind(this.controller));
    router.post("/:listingId", this.controller.soldOne.bind(this.controller));

    // get photos
    router.get("/photo", this.controller.getPhoto.bind(this.controller))
    return router;
  }
}

module.exports = ListingsRouter;
