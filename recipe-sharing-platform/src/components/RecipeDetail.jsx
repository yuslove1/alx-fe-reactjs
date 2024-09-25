import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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
      });
  }, [id]);

  return (
    <div className="">
      <div className="mx-auto my-20 sm:max-w-md lg:max-w-xl bg-slate-200 shadow-lg p-5">
      {/* image container */}
        <div className="my-8"> 
          <img className="rounded-lg mx-auto" src={recipe.image} alt="" />
        </div>

        <h1 className="text-2xl text-red-800 hover:text-red-400 font-extrabold text-center">{recipe.title}</h1>
        <p className="my-10 text-balance text-center px-5">{recipe.summary}</p>

        <div>
        <h3 className="text-red-800 font-bold">INGREDIENTS: </h3>
        {recipe.ingredients? <p className="mb-5 text-red-950">{recipe.ingredients}</p> :  <p className="font-thin italic text-sm">no ingredients availaible.......</p>}
       
       
        <h3 className="text-red-800 mt-3 font-bold">COOKING STEPS </h3>
        {recipe.steps? <p className="mb-5 text-red-950">{recipe.steps}</p> : <p className="font-thin italic text-sm">no cooking steps availaible.......</p>}
      </div>
      </div>

      <Link to="/" > Go Home
      </Link> 
    </div>
  );
}

export default RecipeDetail;
