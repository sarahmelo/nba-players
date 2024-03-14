import { Axios } from 'axios';
import { IPlayer } from './components/interface/player.interface';

const axios = new Axios({
  baseURL: 'https://api.balldontlie.io',
  responseType: "json",  
  headers: {
    Authorization: '07e96539-b3dc-44f9-859b-4452cdf83413',
    "Content-Type": "application/json"
  }
});

export async function getPlayers() {
  const endpoint = 'v1/players/';

  return axios.get(endpoint).then(({ data }) => {
    const responseData = JSON.parse(data);
    

    return responseData.data
  })
}

export async function getPlayerDetails(id: number) {
  const endpoint = `v1/players/${id}`;
  
  return axios.get(endpoint).then(({ data }) => {
    const responseData = JSON.parse(data)
    
    console.log(responseData)

    return responseData.data
  })
}

export async function fillDataBasePlayer(players: IPlayer[]) {
  const endpoint = 'http://localhost:3001/api/players'; 

  return axios.post(endpoint, JSON.stringify(players));
}