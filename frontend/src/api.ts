import { ref } from "vue";
import { IPlayer } from "./interface/player.interface";

export const playersAPI = ref<IPlayer[]>();
export const playerList = ref<IPlayer[]>();
export const isOpen = ref<boolean>();
