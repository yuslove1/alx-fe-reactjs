import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';


function RecipeList() {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  //filter recipes whenever the search term changes
  useEffect(() => {
    filterRecipes()
  }, [filterRecipes]);

  return (
    // <div>
    //  {Array.isArray(recipes) ? recipes.map(recipe => (
    //     <div key={recipe.id}>
    //         <h3>{recipe.title}</h3>
    //         <p>{recipe.description}</p>
    //     </div>
    //  )) : <p>No recipe available</p>}  
    // </div>

    <div>
      {filteredRecipes.length > 0 ?
        (filteredRecipes.map(filteredRecipe =>
        (
          <div key={filteredRecipe.id}>
            <h3>
              <Link to={`/filtered/${filteredRecipe.id}`}>{filteredRecipe}</Link>
            </h3>
            <p>{filteredRecipe.description}</p>
          </div>
        ))
        ) : (<p>no recipes found.....</p>

        )}

    </div>
  );
};

export default RecipeList;