"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Factory extends Model {
    static associate({Product}) {
    this.belongsToMany(Product, { through: 'FactoryProducts', foreignKey: 'factoryId' });
    }
  }
  Factory.init(
    {
      address: DataTypes.STRING,
      contactDetails: DataTypes.STRING,
      typeActivity: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Factory",
    }
  );
  return Factory;
};
