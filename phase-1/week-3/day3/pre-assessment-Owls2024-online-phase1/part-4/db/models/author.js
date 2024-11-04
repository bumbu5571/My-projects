"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate({ Book }) {
      this.hasMany(Book, { foreignKey: "authorId" });
    }
  }
  Author.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Author",
    }
  );
  return Author;
};
