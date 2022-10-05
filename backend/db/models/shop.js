'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.listing, { as: "shop", foreignKey: "shop_id" });
    }
  }
  shop.init({
    name: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'shop',
    underscored: true,
  });
  return shop;
};