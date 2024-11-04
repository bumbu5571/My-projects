//! npx sequelize model:generate --name User --attributes name:string
//! npx sequelize model:generate --name Post --attributes userId:integer,title:text,body:string
//! npx sequelize model:generate --name Comment --attributes postId:integer,userId:integer,text:text
//! npx sequelize model:generate --name ReplyComment --attributes postId:integer,commentId:integer,userId:integer,text:text
//! npx sequelize model:generate --name Like --attributes userId:integer,postId:integer

//! npx sequelize db:migrate
//! npx sequelize db:migrate:undo:all

//! npx sequelize seed:generate --name User
//! npx sequelize seed:generate --name Post
//! npx sequelize seed:generate --name Comment
//! npx sequelize seed:generate --name ReplyComment
//! npx sequelize seed:generate --name Like

//! npx sequelize db:seed:all
//! npx sequelize-cli db:seed:undo:all

const Model = require("./db/models");

const allCommentsFromPost2 = async () => {
  try {
    const comments = await Model.Comment.findAll({
      where: {
        postId: 2,
      },
      include: [
        {
          model: Model.Post,
        },
        {
          model: Model.User,
        },
      ],
    });
    const data = comments.map((comment) => comment.get({ plain: true }));
    console.dir(data, { depth: 4 });
  } catch (err) {
    console.error(err);
  }
};

const answersallCommentsFromPost2 = async () => {
  try {
    const comments = await Model.ReplyComment.findAll({
      where: {
        commentId: 1,
      },
    });
    const data = comments.map((comment) => comment.get({ plain: true }));
    console.dir(data, { depth: 4 });
  } catch (err) {
    console.error(err);
  }
};

const userLike = async () => {
  try {
    const comments = await Model.Like.findAll({
      attributes: ["userId"],
      include: {
        model: Model.User,
      },
    });
    const data = comments.map((comment) => comment.get({ plain: true }));
    console.dir(data, { depth: 4 });
  } catch (err) {
    console.error(err);
  }
};

const createComment = async (postId, userId, text) => {
  try {
    const comment = await Model.Comment.create({
      postId,
      userId,
      text,
    });
    const data = comment.get();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const createAnswersComment = async (postId, commentId, userId, text) => {
  try {
    const comment = await Model.ReplyComment.create({
      postId,
      commentId,
      userId,
      text,
    });
    const data = comment.get();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

/* allCommentsFromPost2();
answersallCommentsFromPost2();
userLike();
createComment(1, 3, "Olo lo lo lo lo lo be");
createAnswersComment(1, 3, 1, "good good answers"); */
