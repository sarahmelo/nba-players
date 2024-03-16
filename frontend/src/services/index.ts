import { api } from "./config";

export async function getPlayers() {
  const endpoint = "/players";

  const { data } = await api.get<IPlayer[]>(endpoint);

  return data;
}

export async function getPlayerDetails(id: number) {
  const endpoint = `/players/${id}`;

  const { data } = await api.get<{ data: IPlayer }>(endpoint);

  return data;
}


export async function editPlayer(
  id: number,
  fields: { [key: string]: string }
) {
  const endpoint = `/players/${id}`;

  const { data } = await api.put(endpoint, fields);

  return data;
}


export async function deletePlayer(
  id: number
) {
  const endpoint = `/players/${id}`;

  return await api.put(endpoint);
}