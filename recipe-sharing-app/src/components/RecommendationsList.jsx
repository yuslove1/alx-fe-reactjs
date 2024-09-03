import React from 'react'
import useRecipeStore from './recipeStore'

export default function RecommendationsList() {
    const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div>
        <h2>Recommendations</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}
