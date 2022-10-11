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
      this.belongsTo(models.user, { as: "buyer", foreignKey: "buyer_id" });
      this.belongsTo(models.user, { as: "seller", foreignKey: "seller_id" });
      this.belongsTo(models.shop, { as: "shop", foreignKey: "shop_id" });
      this.hasOne(models.photo, { as: "photo", foreignKey: "photo" });
      this.belongsTo(models.category, { as: "category", foreignKey: "category_id" });
    }
  }
  listing.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      bought: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      description: DataTypes.STRING,
      buyer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      seller_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      shop_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "shops",
          key: "id",
        },
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "categories",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "listing",
      // underscored: true,
    }
  );
  return listing;
};
