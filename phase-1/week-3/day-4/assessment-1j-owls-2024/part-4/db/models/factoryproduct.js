'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FactoryProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FactoryProduct.init({
    productId: DataTypes.INTEGER,
    factoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FactoryProduct',
  });
  return FactoryProduct;
};