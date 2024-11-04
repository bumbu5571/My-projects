"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ReplyComment extends Model {
    static associate({ User, Post, Comment }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Post, { foreignKey: "postId" });
      this.belongsTo(Comment, { foreignKey: "postId" });
    }
  }
  ReplyComment.init(
    {
      postId: DataTypes.INTEGER,
      commentId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      text: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "ReplyComment",
    }
  );
  return ReplyComment;
};
