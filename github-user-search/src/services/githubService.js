// import axios from "axios";

// export function fetchUserData(user, loc, repNum) {
//   let query = `username:${user}`

//   return axios
//     .get(`https://api.github.com/users/q=${query}`)
//     .then((response) => response.data)
//     .catch((error) => {
//       throw error;
//     });
// }

// export function fiterUsers(location, repNum) {
//   return axios
//     .get(
//       `https://api.github.com/search/users?q=location:${location}+repos:>${repNum}`
//     )
//     .then((response) => response.data)
//     .catch((error) => {
//       throw error;
//     });
// }

import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = username ? `${username} in:login` : "";

    if (location) {
      query += ` location:${location}`;
    }

    if (minRepos) {
      query += ` repos:>${minRepos}`;
    }

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    return response.data;
  } catch (error) {
    console.error("error fetching data:", error);
    return null;
  }
};
