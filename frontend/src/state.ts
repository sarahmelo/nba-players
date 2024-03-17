import { ref } from "vue";
import { IPlayer } from "./interface/player.interface";

export const playerListFiltered = ref<IPlayer[]>();
export const playerList = ref<IPlayer[]>();
export const player = ref<IPlayer>();
export const isOpen = ref<boolean>();
export const modalState = ref<'off' | 'edit' | 'delete'>();
export const formState = ref<Pick<IPlayer, 'first_name' | 'last_name' | 'position' | 'jersey_number'>>({
    first_name: '',
    last_name: '',
    jersey_number: '',
    position: '',
})

export function handleActiveModal(event: Event) {
	isOpen.value = !isOpen.value
	console.log('entrou')
	console.log(isOpen.value)
	event.preventDefault();
}
