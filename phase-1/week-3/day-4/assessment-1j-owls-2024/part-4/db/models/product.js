"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({Factory}) {
      this.belongsToMany(Factory, { through: 'FactoryProducts', foreignKey: 'productId' });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      width: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      expirationDate: DataTypes.INTEGER,
      barcode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
