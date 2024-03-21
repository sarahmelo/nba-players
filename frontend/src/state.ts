import { ref } from "vue";

export const playerListFiltered = ref<Player[]>();
export const playerList = ref<Player[]>();
export const player = ref<Player>();
export const isOpen = ref<boolean>();
export const modalState = ref<'off' | 'edit' | 'delete' | 'error'>();
export const teams = ref<Team[]>([]);
export const formState = ref<FormState>({
    college: '',
    country: '',
    draft_number: 0,
    draft_round: 0, 
    draft_year: 0,
    first_name: '',
    height: '',
    id: 0,
    jersey_number: '',
    last_name: '',
    position: '',
    weight: '',
    team_id: 0,
})

export const COLUMNS: Record<keyof Omit<Player, "deleted_at" | "created_at" | "updated_at"| "id">, any> = {
    first_name: 'First Name',
    last_name: 'Last Name',
    college: 'College',
    position: 'Position',
    height: 'Height',
    weight: 'Weight',
    jersey_number: 'Jersey Number',
    country: 'Country',
    draft_year: 'Draft Year',
    draft_round: 'Draft Round',
    draft_number: 'Draft Number',
    team: 'Team'
  }

export function handleActiveModal(event: Event) {
	isOpen.value = !isOpen.value
	event.preventDefault();
}