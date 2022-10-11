'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.listing, { as: "listing", foreignKey: "listing_id" });
    }
  }
  photo.init({
    listingId: {
        type: DataTypes.INTEGER,
        references: {
          model: "listings",
          key: "id",
        },
      },
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'photo',
    underscored: true,
  });
  return photo;
};