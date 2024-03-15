import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.BASE_URL_API;

const REQUEST_OPTIONS = {
  headers: {
    Authorization: process.env.API_KEY,
  },
};

const fetchData = async () => {
  let teams = [];
  let players = [];

  try {
    console.log("Fetching data from from API");

    const [teamsResponse, playersResponse] = await Promise.all([
      fetch(`${BASE_URL}/teams`, REQUEST_OPTIONS),
      fetch(`${BASE_URL}/players`, REQUEST_OPTIONS),
    ]);

    teams = (await teamsResponse.json()).data;
    players = (await playersResponse.json()).data;
  } catch (err) {
    throw new Error("Failed to fetch data from API: " + err.message);
  }

  return { teams, players };
};

export const populateDatabase = async (db) => {
  console.log("Checking if database is already populated");

  const teamCount = await db.Team.count();
  const playerCount = await db.Player.count();

  if (teamCount && playerCount) {
    console.log("Database is already populated, skipping population");
    return;
  }

  try {
    console.log("Database is not populated, populating database");

    const { teams, players } = await fetchData();

    if (!teams.length || !players.length) {
      console.log("No data fetched from API, skipping population");
      return;
    }

    const playersFormatted = players.map((player) => ({
      ...player,
      team_id: player.team.id,
    }));

    await db.Team.bulkCreate(teams);
    await db.Player.bulkCreate(playersFormatted);
  } catch (err) {
    throw new Error("Failed to populate database: " + err.message);
  }
};
