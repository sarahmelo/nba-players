import { Router } from "express";

const routes = Router();

routes.get("/api/players", async (req, res) => {
  const players = await db.Player.findAll();
  res.json(players);
});

routes.patch("/api/players/:id", async (req, res) => {
  const { id } = req.params;
  const allowedFields = [
    "first_name",
    "last_name",
    "jersey_number",
    "position",
  ];

  const playerFound = await db.Player.findByPk(id);

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

routes.delete("/api/players/:id", async (req, res) => {
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
