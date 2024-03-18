import { playerList, playerListFiltered } from "../state";
import { api } from "./config";

export async function getPlayers() {
  const endpoint = "/players";

  const { data } = await api.get<Player[]>(endpoint);

  return data;
}

export async function editPlayer(
  id: number,
  fields: Player
) {
  const endpoint = `/players/${id}`;

  const { data } = await api.put(endpoint, fields);

  return data;
}


export async function deletePlayer(id: number) {
  const endpoint = `/players/${id}`;

  return await api.delete(endpoint);
}

export async function getTeams() {
  const endpoint = '/teams';

  const { data } = await api.get(endpoint)

  return data;
}

export async function updateTable() {
  setTimeout(async () => {
    playerList.value = await getPlayers()
    playerListFiltered.value = playerList.value
  }, 1000)
}