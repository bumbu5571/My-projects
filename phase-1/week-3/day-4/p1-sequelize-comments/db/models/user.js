"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Post, Comment, ReplyComment, Like }) {
      this.hasMany(Post, { foreignKey: "userId" });
      this.hasMany(Comment, { foreignKey: "userId" });
      this.hasMany(ReplyComment, { foreignKey: "userId" });
      this.hasMany(Like, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
