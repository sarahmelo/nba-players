import { Router } from "express";
import { db } from '../database'

const routes = Router();

routes.get("/players", async (req, res) => {
  const players = await db.Player.findAll({ 
    include: [{ 
      model: db.Team,
      as: 'team',
    }]
  });
  res.json(players);
});

routes.get("/players/:id", async (req, res) => {
  const { id } = req.params;

  const playerFound = await db.Player.findByPk(id);
  res.json(playerFound);
});

routes.put("/players/:id", async (req, res) => {
  const { id } = req.params;
  const allowedFields = [
    "first_name",
    "last_name",
    "jersey_number",
    "position",
  ];

  const playerFound = await db.Player.findByPk(id);

  console.log('===> db', req.body)


  if (!playerFound) {
    res.status(422).json({ message: "Player not found" });
    return;
  }

  allowedFields.forEach((field) => {
    if (req.body[field] && typeof req.body[field] === "string") {
      playerFound[field] = req.body[field];
    }
  });

  await playerFound.save();
  res.status(200).send();
});

routes.delete("/players/:id", async (req, res) => {
  const { id } = req.params;
  const player = await db.Player.findByPk(id);

  if (!player) {
    res.status(422).json({ message: "Player not found" });
    return;
  }

  await player.destroy();
  res.json({ message: "Player deleted successfully" });
});

export { routes };
