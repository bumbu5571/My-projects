"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Entrie extends Model {
    static associate({Horse, Jockey, Race}) {
      this.belongsTo(Horse,{foreignKey: "horse_id"});
      this.belongsTo(Jockey,{foreignKey: "jockey_id"});
      this.belongsTo(Race,{foreignKey: "race_id"});
    }
  }
  Entrie.init(
    {
      race_id: DataTypes.INTEGER,
      jockey_id: DataTypes.INTEGER,
      horse_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Entrie",
    }
  );
  return Entrie;
};
