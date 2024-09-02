import React from 'react'
import RecipeList from './RecipeList'
import AddRecipeForm from './AddRecipeForm'
import SearchBar from './SearchBar'

function Home() {
  return (
    <div>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </div>
  )
}

export default Home;