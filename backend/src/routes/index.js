import { Router } from "express";

import { playersRoutes } from "./players.routes";
import { teamsRoutes } from "./teams.routes";

const routes = Router();

routes.use(`/players`, playersRoutes);
routes.use(`/teams`, teamsRoutes);

export { routes };
