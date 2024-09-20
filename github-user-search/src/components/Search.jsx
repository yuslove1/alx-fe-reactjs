import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserdata] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = () => {
    setIsLoading(true)
    setIsError(false);

    fetchUserData(username)
      .then((data) => {
        setIsLoading(false);
        setUserdata(data);
        // console.log(data);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        // console.error("Error fetching data", error)
      });

      setUsername('')
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter github username"
      />
      <button onClick={handleSearch}>Search</button>
      <hr />

      <div>
        {isLoading && <p>Loading......</p>}
        {isError && <p>Looks like we cant find the user</p>}
        {userData && (
          <div>
            <div>
              <img src={userData.avatar_url} alt="avater" />
            </div>
            <h2>{userData.name}</h2>
            <a href={userData.html_url}>{userData.html_url}</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
