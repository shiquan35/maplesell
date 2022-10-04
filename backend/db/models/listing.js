"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  listing.init(
    {
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      buyer_id: DataTypes.STRING,
      seller_id: DataTypes.STRING,
      item_id: DataTypes.STRING,
      shop_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "listing",
      underscored: true,
    }
  );
  return listing;
};
