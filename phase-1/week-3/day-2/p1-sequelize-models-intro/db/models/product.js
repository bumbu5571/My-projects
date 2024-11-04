'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({User}) {
      this.hasMany(User, { foreignKey: 'favourite_products_id' });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    product_type: DataTypes.STRING,
    date_manufacture: DataTypes.DATE,
    expiration_date: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};