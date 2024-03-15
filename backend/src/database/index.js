import { DataTypes, Sequelize } from "sequelize";

import { PlayerModel } from "../models/player";
import { TeamModel } from "../models/team";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
  define: {
    paranoid: true,
  },
});

TeamModel(sequelize, DataTypes);
PlayerModel(sequelize, DataTypes);

export const db = {
  sequelize,
  Sequelize,
  ...sequelize.models,
};
