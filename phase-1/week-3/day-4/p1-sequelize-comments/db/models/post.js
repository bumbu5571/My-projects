"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ User, Comment, ReplyComment, Like }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.hasMany(Comment, { foreignKey: "postId" });
      this.hasMany(ReplyComment, { foreignKey: "postId" });
      this.hasMany(Like, { foreignKey: "postId" });
    }
  }
  Post.init(
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.TEXT,
      body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
