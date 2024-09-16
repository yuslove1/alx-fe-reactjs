import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();

  const [recipe, setRecipes] = useState({});

  useEffect(() => {
    // Fetch the data from the local data.json file
    fetch("../src/data.json")
      .then((response) => response.json())
      .then((datas) => {
        const recipe = datas.find((data) => data.id === parseInt(id)); //find the exact recipe from recipes
        setRecipes(recipe);
        console.log(recipe)
      });
  }, [id]);

  return (
    <div className="">
      <div className="mx-auto my-20 sm:max-w-sm lg:max-w-xl bg-slate-200 flex flex-col items-center shadow-lg">
      {/* image container */}
        <div className="my-8"> 
          <img className="rounded-lg" src={recipe.image} alt="" />
        </div>

        <h1 className="text-2xl text-red-800 hover:text-red-400">{recipe.title}</h1>
        <p className="my-10 text-balance text-center px-5">{recipe.summary}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
