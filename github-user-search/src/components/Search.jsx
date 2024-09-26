import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [location, setLocation] = useState("");
  const [minRep, setMinRep] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setUserData([]);
    setUsername("");
    setLocation("");
    setMinRep("");

    // fetchUserData(username, location, minRep)
    //   .then((data) => {
    //     setIsLoading(false);
    //     setUserData(data.items);
    //   })
    //   .catch((error) => {
    //     setIsError(true);
    //     setIsLoading(false);
    //     console.error("Error fetching data", error)
    //   });

    const data = await fetchUserData(username, location, minRep);

    if (data && data.items.length > 0) {
      setIsLoading(false);
      setUserData(data.items);
      // setPage(page + 1);
    } else {
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="my-8 text-3xl text-center text-slate-600 font-bold">
          GItHUB PROFILE SEARCHER
        </h1>

        <div id="form-cotainer" className="max-w-2xl mx-auto shadow-lg">
          <form onSubmit={handleSearch}>
            <div className=" pt-2 items-center">
              <label
                htmlFor="input-1"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter github username"
                id="input-1"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-lg"
              />
            </div>

            <h2 className="text-center font-semibold my-4">Advance Search</h2>
            <div className="w-full flex gap-4 justify-center">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-10/12 ps-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-lg"
              />
              <input
                type="number"
                value={minRep}
                onChange={(e) => setMinRep(e.target.value)}
                placeholder="Minimum Repos"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-3/12 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:shadow-lg"
              />
            </div>
            <button
              className="p-4 rounded-md bg-slate-500 self-center mt-5 mx-auto block text-white hover:bg-slate-700"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <hr className="shadow-2xl" />

      <div className="max-w-2xl mx-auto">
        {isLoading &&<div className="mx-auto h-screen flex justify-center items-center font-semibold italic text-2xl "><p>Loading........</p></div>}
        {isError && <div className="mx-auto h-screen text-red-300 flex justify-center items-center text-2xl font-extrabold"><p>Looks like we cant find the user</p></div>}
        <div className="container grid sm:grid-cols-2 xs:grid-cols-1 gap-4 mx-auto mt-6 bg-slate-100">
          {Array.isArray(userData) &&
            userData.map((user) => (
              <div key={user.id} className="flex justify-between bg-slate-300 rounded-lg">
                <div>
                  <img src={user.avatar_url} alt="avater" />
                </div>

                <div className="p-2">
                  <h1 className="bg-gray-300 font-medium font-mono rounded">{user.login}</h1>
                  <h2>User Login:{user.location}</h2>
                  <p>Repositories :{user.public_repos}</p>
                  <a href={user.html_url} className="text-blue-500">view profile</a>
                </div>
              </div>
            ))}
        </div>

        {/* <button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load More"}
        </button> */}
      </div>
    </>
  );
}

export default Search;
