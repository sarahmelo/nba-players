export interface IPlayer {
	first_name: string;
	last_name: string;
	college: string;
	country: string;
	id: number;
	position: string;
	height: string;
	weight: string;
	jersey_number: string;
	team: {
		full_name: string;
	}
}