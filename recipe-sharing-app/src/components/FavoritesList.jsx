import React from 'react'
import useRecipeStore from './recipeStore'

function FavoritesList() {
    const favorites = useRecipeStore(state => state.favorites.map(id => 
        state.recipes.find(recipes => recipes.id === id)
    ));

  return (
    <div>
    <h2>My favorites</h2>
    {favorites.map(recipe => (
        <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
        </div>
    ))}  
    </div>
  );
};

export default FavoritesList;
