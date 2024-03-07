const { Sequelize } = require('sequelize');
const { sequelize } = require('../app.cjs');
const { Player } = require('../models');

async function setupDB() {
    try {
        Team.hasMany(Player, { foreignKey: 'player'});
        
        await sequelize.sync({ force: true });
    } catch(error) {
        console.log(error)
    }
};

const getAllPlayers = app.get('api/players', (req, res) => {
    Player.findAll().then(player => {
        res.json(player);
    })
})

const getPlayer = app.get('/api/players/:id', (req, res) => {
    db.Player.findAll().then(player => {
        res.json(player);
    })
})

async function startServer() {
    try {
        await setupDB();

        const port = 3001
        const express = require('express');
        const app = express();

        app.use(express.json());

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
    } catch (error) {
        console.error(error);
    }
}
startServer()
