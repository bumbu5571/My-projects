//!  npx sequelize model:generate --name Product --attributes name:string,width:integer,height:integer,expirationDate:integer,barcode:string
//!  npx sequelize model:generate --name Factory --attributes address:string,contactDetails:string,typeActivity:string
//!  npx sequelize model:generate --name FactoryProduct --attributes productId:integer,factoryId:integer
//!  npx sequelize seed:generate --name Product
//!  npx sequelize seed:generate --name Factory
//!  npx sequelize seed:generate --name FactoryProduct
const { where } = require("sequelize");
const { Product, Factory } = require("./db/models");

const findAllFactory = async () => {
  try {
    const factorys = await Factory.findAll({});
    const data = factorys.map((factory) => factory.get());
    console.log(data);
  } catch (error) {
    console.error(error);
  }

  try {
    const factorys = await Factory.findAll({
      attributes: ["contactDetails"],
    });
    const data = factorys.map((factory) => factory.get());
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const FactorieProduct2 = async () => {
  try {
    const factorys = await Factory.findAll({
      where: { typeActivity: "Производство картона" },
      include: {
        model: Product,
        attributes: ["name", "width", "height", "expirationDate", "barcode"],
      },
    });
    const data = factorys.map((factory) => factory.get({ plain: true }));
    console.dir(data, { depth: 4 });
  } catch (error) {
    console.error(error);
  }
};

FactorieProduct2();
