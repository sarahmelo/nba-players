import { api } from "./config";

interface GetPlayersResponse {
  data: IPlayer[];
  meta: {
    per_page: number;
    cursor: number;
  };
}

export async function getPlayers() {
  const endpoint = "v1/players/";

  const { data } = await api.get<IPlayer[]>(endpoint);

  return data;
}

interface GetPlayerDetailsResponse {
  data: IPlayer;
}

export async function getPlayerDetails(id: number) {
  const endpoint = `v1/players/${id}`;

  const { data } = await api.get<GetPlayerDetailsResponse>(endpoint);

  return data;
}
