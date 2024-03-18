import { Router } from "express";
import { db } from "../database";

const teamsRoutes = Router();

teamsRoutes.get("/", async (req, res) => {
  const teams = await db.Team.findAll();
  res.json(teams);
});

export { teamsRoutes };
