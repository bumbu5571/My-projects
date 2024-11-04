"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate({ Author }) {
      this.belongsTo(Author, { foreignKey: "authorId" });
    }
  }
  Book.init(
    {
      title: DataTypes.STRING,
      countPage: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
