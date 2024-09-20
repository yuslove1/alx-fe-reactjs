import axios from 'axios'

export function fetchUserData (user) {
   return axios.get(`https://api.github.com/users/${user}`)
    .then((response) => response.data)
    .catch((error) => {throw error});
}