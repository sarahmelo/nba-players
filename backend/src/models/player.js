export const PlayerModel = (sequelize, DataTypes) => {
  const Player = sequelize.define(
    "Player",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      position: DataTypes.STRING,
      height: DataTypes.STRING,
      weight: DataTypes.STRING,
      jersey_number: DataTypes.STRING,
      college: DataTypes.STRING,
      country: DataTypes.STRING,
      draft_year: DataTypes.INTEGER,
      draft_round: DataTypes.INTEGER,
      draft_number: DataTypes.INTEGER,
    },
    {
      defaultScope: {
        include: [
          {
            model: sequelize.models.Team,
            as: "team",
          },
        ],
        attributes: {
          exclude: ["team_id"],
        },
      },
    }
  );

  Player.belongsTo(sequelize.models.Team, {
    foreignKey: "team_id",
    as: "team",
  });

  return Player;
};
