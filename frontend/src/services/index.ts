import { AxiosError } from "axios";
import { playerList, playerListFiltered } from "../state";
import { api } from "./config";

export async function getPlayers() {
  try {
    const endpoint = "/players";
    const { data } = await api.get<Player[]>(endpoint);

    return data;
  } catch (e: unknown) {
    const { message } = e as AxiosError;
    
    throw new Error(message)
  }
}

export async function editPlayer(
  id: number,
  fields: FormState
) {
  try {
    const endpoint = `/players/${id}`;
    const { data } = await api.put(endpoint, fields);
    
    return data;
  } catch(e: unknown) {
    const { message } = e as AxiosError;

    throw new Error(message)
  }
}


export async function deletePlayer(id: number) {
  try {
    const endpoint = `/players/${id}`;

    return await api.delete(endpoint);
  } catch (e: unknown) {
    const { message } = e as AxiosError;
    
    throw new Error(message)
  }
}

export async function getTeams() {
  try {
    const endpoint = '/teams';
    const { data } = await api.get(endpoint)
  
    return data;
  } catch (e: unknown) {
    const { message } = e as AxiosError;
    
    throw new Error(message)
  }
}

export async function updateTable() {
  setTimeout(async () => {
    playerList.value = await getPlayers()
    playerListFiltered.value = playerList.value
  }, 1000)
}