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
  fields: { [field: string]: string }[]
) {
  const endpoint = `/players/${id}`;

  const { data } = await api.patch(endpoint);

  return data;
}
