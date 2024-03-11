const sqlite3 = require('sqlite3');
const express = require('express');
const cors = require('cors');
const app = express();

const port = 3001
var db = new sqlite3.Database('database.sqlite')
const corsOptions = {
    allowedHeaders: ['Authorization', 'Content-Type'],
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
};

async function setupApp() {
    try {
        app.use(cors(corsOptions));
        app.use(express.json())

    } catch (error) {
        console.error(error);
    }
}

async function startServer() {
    try {
        await setupApp();

        app.post('/api/players', async (req, res) => {
            const players = req.body;

            if (!players || !Array.isArray(players)) {
                res.status(400).json({
                    error: 'Array de players não fornecidos.'
                })
                return
            }

            try {
                await db.run('PRAGMA foreign_keys=1');
                await db.run('BEGIN TRANSACTION');


                await db.run(`
                    CREATE TABLE IF NOT EXISTS Team (
                        id INTEGER PRIMARY KEY,
                        conference TEXT,
                        division TEXT,
                        city TEXT,
                        name TEXT,
                        full_name TEXT,
                        abbreviation TEXT
                    )
                `);

        
                await db.run(`
                    CREATE TABLE IF NOT EXISTS Player (
                        id INTEGER PRIMARY KEY,
                        first_name TEXT,
                        last_name TEXT,
                        position TEXT,
                        height TEXT,
                        weight TEXT,
                        jersey_number TEXT,
                        college TEXT,
                        country TEXT,
                        draft_year INTEGER,
                        draft_round INTEGER,
                        draft_number INTEGER,
                        team_id INTEGER,
                        FOREIGN KEY (team) REFERENCES team(id)
                    )
                `)

                const generatePlayer = db.prepare(`
                    INSERT or REPLACE INTO Player (
                        id,
                        first_name, 
                        last_name, 
                        position, 
                        height, 
                        weight, 
                        jersey_number,
                        college, 
                        country, 
                        draft_year, 
                        draft_round, 
                        draft_number,
                        team_id
                    )
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `)

                const generateTeam = db.prepare(`
                    INSERT or REPLACE INTO Team (
                        id,
                        conference,
                        division,
                        city,
                        name,
                        full_name,
                        abbreviation
                    )
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                `)

                for (const player of players) {
                    generateTeam.run([
                        player.team.id,
                        player.team.conference,
                        player.team.division,
                        player.team.city,
                        player.team.name,
                        player.team.full_name,
                        player.team.abbreviation,
                    ])

                    generatePlayer.run([
                        player.id,
                        player.first_name, 
                        player.last_name, 
                        player.position, 
                        player.height, 
                        player.weight, 
                        player.jersey_number,
                        player.college, 
                        player.country, 
                        player.draft_year, 
                        player.draft_round, 
                        player.draft_number,
                        player.team.id
                    ])
                }
    
                generatePlayer.finalize();
                await db.run('COMMIT');
        
                res.status(201).json({ message: 'Jogadores Inseridos com sucesso!'})
            } catch(error) {
                res.status(500).json({ error: 'Erro ao criar grupo de jogadores'})
            }
        })


        app.listen(port, () => {
            console.log(`App listening on port ${port}`) 
        })

        app.use(function (req, res, next){            
            next()
        })

    } catch (error) {
        console.error(error);
    }
}
startServer()
