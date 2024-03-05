import { Axios } from 'axios';

const axios = new Axios({
  baseURL: 'https://api.balldontlie.io',
  headers: {
    Authorization: '07e96539-b3dc-44f9-859b-4452cdf83413',
  }
});

export async function getPlayers() {
  const endpoint = 'v1/players/';

  return axios.get(endpoint).then(({ data }) => {
    const responseData = JSON.parse(data);
    
    console.log(responseData)

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