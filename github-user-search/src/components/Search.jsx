import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [login, setLogin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = (e) => {
e.preventDefault();
    setIsLoading(true)
    setIsError(false);

    fetchUserData(username)
      .then((data) => {
        setIsLoading(false);
        setLogin(data);
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
        <form onSubmit={handleSearch}>
        <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter github username"
      />

      <button type="submit">Search</button>
        </form>
      
     
      <hr />

      <div>
        {isLoading && <p>Loading......</p>}
        {isError && <p>Looks like we cant find the user</p>}
        {login && (
          <div>
            <div>
              <img src={login.avatar_url} alt="avater" />
            </div>
            <h2>{login.name}</h2>
            <a href={login.html_url}>{login.html_url}</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
