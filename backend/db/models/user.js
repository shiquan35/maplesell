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
      this.hasMany(models.listing, { as: "buyer", foreignKey: "buyerId" });
      this.hasMany(models.listing, { as: "seller", foreignKey: "sellerId" });
      this.belongsToMany(models.item, { through: "inventories" });
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
