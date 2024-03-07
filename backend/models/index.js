export const Player = sequelize.define('Team', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
    },
    conference: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    division: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    abbreviation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
});
export const Team = sequelize.define('Player', {
    firstName: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    height: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    jerseyNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    college: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
