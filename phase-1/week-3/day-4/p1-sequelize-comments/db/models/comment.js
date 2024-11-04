"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Post, ReplyComment }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Post, { foreignKey: "postId" });
      this.hasMany(ReplyComment, { foreignKey: "postId" });
    }
  }
  Comment.init(
    {
      postId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      text: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
