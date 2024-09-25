import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  //fetching data from static data.json and set the value to to the recipes in useState
  useEffect(() => {
    fetch("../src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  // const fetchRecipe = async() => {
  //   try {
  //     const datafetch = await fetch('data.json')
  //     const datas = await datafetch.json();
  //     return datas
  //   }catch(error){
  //     console.error('ERROR!!!', error)
  //   }
  // }
  return (
    
    <div className="container mx-auto grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center items-center">
      {recipes.map((recipe) => (
        // eslint-disable-next-line react/jsx-key
        <Link to={`/recipe/${recipe.id}`}>
          <div
            key={recipe.id}
            className=" bg-gray-100 flex mx-auto sm:max-w-xs md:max-w-lg rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
          >
            <img
              src={recipe.image}
              alt="recipe"
              srcSet=""
              className="rounded-tl-lg rounded-bl-lg"
            />
            <div className="flex-auto">
              <h1 className="text-center my-5 text-xl text-gray-600">
                {recipe.title}
              </h1>
              <p className="text-center text-balance text-gray-500">
                {recipe.summary}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
