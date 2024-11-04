"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Race extends Model {
    static associate({ Entrie }) {
      this.hasMany(Entrie, { foreignKey: "race_id" });
    }
  }
  Race.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Race",
    }
  );
  return Race;
};
