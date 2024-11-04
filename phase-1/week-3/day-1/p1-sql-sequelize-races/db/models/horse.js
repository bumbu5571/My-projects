"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Horse extends Model {
    static associate({Entrie}) {
      this.hasMany(Entrie,{foreignKey: "horse_id"});
    }
  }
  Horse.init(
    {
      name: DataTypes.STRING,
      breed: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Horse",
    }
  );
  return Horse;
};
