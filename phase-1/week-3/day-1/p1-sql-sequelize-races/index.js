//! Создаём .sequelizerc
//! npx sequelize-cli init

//?                                              Не должно быть пробелов в attributes
//! npx sequelize model:generate --name Jockey --attributes name:string
//! npx sequelize model:generate --name Horse --attributes name:string,breed:string
//! npx sequelize model:generate --name Race --attributes date:date
//! npx sequelize model:generate --name Entrie --attributes race_id:integer,jockey_id:integer,horse_id:integer
//! npx sequelize db:migrate

//! npx sequelize seed:generate --name Jockey
//! npx sequelize seed:generate --name Horse
//! npx sequelize seed:generate --name Race
//! npx sequelize seed:generate --name Entrie
//! npx sequelize db:seed:all
//! npx sequelize db:migrate:undo:all - очищает базу данных

const { Jockey, Horse, Race, Entrie } = require("./db/models");

const findAllHorse = async () => {
  try {
    const horses = await Horse.findAll();
    const data = horses.map((horse) => horse.get());
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const findAllEntries = async () => {
  try {
    const entries = await Entrie.findAll({
      where: {
        race_id: 1,
      },
      include: [
        {
          model: Horse,
        },
        {
          model: Jockey,
        },
        {
          model: Race,
        },
      ],
    });
    const data = entries.map((entrie) => entrie.get({ plain: true }));
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

