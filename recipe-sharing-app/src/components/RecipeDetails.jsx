import React from 'react'
import useRecipeStore from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore((state) => state.recipes.find(recipe => recipe.id === recipeId));

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
    <DeleteRecipeButton />
<div>
    <EditRecipeForm />
</div>
    </div>
  )
}

export default RecipeDetails
