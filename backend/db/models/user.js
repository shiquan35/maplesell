"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.listing, { as: "buyer", foreignKey: "buyer_id" });
      this.hasMany(models.listing, { as: "seller", foreignKey: "seller_id" });
    }
  }
  user.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      username: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      // tableName: "users",
      underscored: true,
    }
  );
  return user;
};
