export const TeamModel = (sequelize, DataTypes) => {
  const Team = sequelize.define("Team", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    conference: DataTypes.STRING,
    division: DataTypes.STRING,
    city: DataTypes.STRING,
    name: DataTypes.STRING,
    full_name: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
  });

  return Team;
};
