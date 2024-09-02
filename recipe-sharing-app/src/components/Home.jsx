import React from 'react'
import RecipeList from './RecipeList'
import AddRecipeForm from './AddRecipeForm'

function Home() {
  return (
    <div>
        <AddRecipeForm />
        <RecipeList />
    </div>
  )
}

export default Home;