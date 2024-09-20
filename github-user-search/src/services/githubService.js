import axios from 'axios'

export function fetchUserData (username) {
   return axios.get(`https://api.github.com/users/${username}`)
    .then((response) => response.data)
    .catch((error) => {throw error});
}