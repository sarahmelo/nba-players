import { ref } from "vue";
import { IPlayer } from "./interface/player.interface";

export const playersAPI = ref<IPlayer[]>();
export const playerList = ref<IPlayer[]>();
export const player = ref<IPlayer>();
export const isOpen = ref<boolean>();

export function handleActiveModal(event: Event) {
	event.preventDefault();
	isOpen.value = !isOpen.value
}
