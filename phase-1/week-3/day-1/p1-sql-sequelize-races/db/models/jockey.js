"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Jockey extends Model {
    static associate({Entrie}) {
      this.hasMany(Entrie,{foreignKey: "jockey_id"});
    }
  }
  Jockey.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Jockey",
    }
  );
  return Jockey;
};
