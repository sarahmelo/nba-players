const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage: './database.sqlite'
})
var db = {}

async function setupDB() {
    try {
        db.Player = sequelize.define('Player', {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
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
            abbreviation: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            
        });
        

        // Team.hasMany(Player, { foreignKey: 'player'});

        await sequelize.sync({ force: true });
        await db.Player.create({
            firstName: "Sarah",
            lastName: "Melo",
            id: 1,
            abbreviation: 'SM',
            city: "São Gonçalo",
            division: "C",
            conference: "Não Sei ORG",
        })

    } catch (error) {
        console.error(error);
    }
}

async function startServer() {
    try {
        await setupDB();

        const port = 3001
        const express = require('express');
        const app = express();

        app.use(express.json());

        app.get('/api/players', (req, res) => {
            db.Player.findAll().then(players => {
                res.json(players);
            })
        })

        app.get('/api/players/:id', (req, res) => {
            db.Player.findAll().then(player => {
                res.json(player);
            })
        })

        app.post('/api/players/:id', (req, res) => {
            db.Player.create(req.body).then(player => {
                res.json(player)
            })
        })

        app.delete('/api/players/:id', (req, res) => {
            db.Player.destroy({
                where: {
                    id: req.params.id
                }
            }).then(() => {
                res.sendStatus(204);
            }).catch(() => {
                res.sendStatus(500)
            })
        })

        app.listen(port, () => {
            console.log(`App listening on port ${port}`) 
        })
    } catch (error) {
        console.error(error);
    }
}
startServer()
