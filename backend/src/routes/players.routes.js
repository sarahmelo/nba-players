import { Router } from "express";
import { db } from "../database";

const playersRoutes = Router();

playersRoutes.get("/", async (req, res) => {
  const players = await db.Player.findAll();
  res.json(players);
});

playersRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const editableFields = Object.keys(db.Player.rawAttributes);
  const playerFound = await db.Player.findByPk(id);

  if (!playerFound) {
    res.status(422).json({ message: "Player not found" });
    return;
  }

  Object.keys(req.body).forEach((field) => {
    if (editableFields.includes(field)) {
      playerFound[field] = req.body[field];
    }
  });

  await playerFound.save();
  res.status(200).send();
});

playersRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const player = await db.Player.findByPk(id);

  if (!player) {
    res.status(422).json({ message: "Player not found" });
    return;
  }

  await player.destroy();
  res.json({ message: "Player deleted successfully" });
});

export { playersRoutes };
