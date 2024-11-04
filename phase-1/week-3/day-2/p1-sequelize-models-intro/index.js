//  npx sequelize model:generate --name User --attributes first_name:string,last_name:string,age:integer,gender:string,worker:string
//  npx sequelize model:generate --name Product --attributes name:string,product_type:string,date_manufacture:date,expiration_date:integer

//  npx sequelize db:migrate

//  npx sequelize seed:generate --name Product
//  npx sequelize seed:generate --name User
//  npx sequelize db:seed:all
//  npx sequelize db:migrate:undo:all

//  npx sequelize model:generate --name Order --attributes user_id:integer,product_id:integer
//  npx sequelize seed:generate --name Order
//  npx sequelize db:seed --seed 20241029134411-Order.js

const { Order, Product, User } = require("./db/models");

const findAllUsers = async () => {
  try {
    const users = await User.findAll();
    const data = users.map((user) => user.get());
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (
  first_name,
  last_name,
  age,
  gender,
  worker,
  favourite_products_id
) => {
  try {
    const user = await User.create({
      first_name,
      last_name,
      age,
      gender,
      worker,
      favourite_products_id,
    });
    const data = user.get();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

//   createUser('Максим', 'Максимов', 22, 'M', 'Developer', 3)

const findAllWorkersUser = async () => {
  try {
    const users = await User.findAll({
      where: {
        worker: "Developer",
      },
    });
    const data = users.map((user) => user.get());
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

//   findAllWorkersUser()

const deleteUser = async (id) => {
  try {
    await User.destroy({ where: { id } });
  } catch (error) {
    console.error(error);
  }
};

// deleteUser(6)

const updateUser = async (id, first_name, last_name) => {
  try {
    await User.update({ first_name, last_name }, { where: { id } });
  } catch (error) {
    console.error(error);
  }
};

//   updateUser(1, 'Максим', 'Максимов')
//   findAllUsers()

const usersWithProduct = async () => {
  try {
    const users = await User.findAll({
      // where: { groupId: 1 },
      attributes: ["first_name", "worker", "age", "favourite_products_id"],
      order: [["age", "DESC"]],
      include: {
        model: Product,
        attributes: ["name"],
      },
    });
    const data = users.map((user) => user.get({ plain: true }));
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

usersWithProduct();
