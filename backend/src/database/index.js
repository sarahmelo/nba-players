import { DataTypes, Sequelize } from "sequelize";

import { PlayerModel } from "../models/player";
import { TeamModel } from "../models/team";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
  define: {
    paranoid: true,
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  },
});

TeamModel(sequelize, DataTypes);
PlayerModel(sequelize, DataTypes);

export const db = {
  sequelize,
  Sequelize,
  ...sequelize.models,
};
