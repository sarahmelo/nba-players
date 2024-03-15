import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

import { db } from "./database";
import { routes } from "./routes";
import { populateDatabase } from "./seeders";

const PORT = process.env.API_PORT || 3001;

const CORS_OPTIONS = {
  allowedHeaders: ["Content-Type"],
  origin: process.env.WEB_APP_HOST,
  methods: "GET,PUT,POST,OPTIONS,DELETE",
};

const app = express();

app.use(cors(CORS_OPTIONS));
app.use(express.json());
app.use(routes);

db.sequelize.sync({ force: false }).then(async () => {
  await populateDatabase(db);

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
});
