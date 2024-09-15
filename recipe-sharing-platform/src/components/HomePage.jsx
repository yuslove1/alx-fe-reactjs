import React, { useEffect } from 'react'
import { useState } from 'react'



function HomePage() {
  const [recipes, setRecipes] = useState([])

  //fetching data from static data.json and set the value to to the recipes in useState
  useEffect(() => {
    fetch('./data.json').then(res => res.json()).then(data => setRecipes(data))
  }, [])

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
    <div className='container mx-auto grid lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center items-center'>
      {recipes.map(recipe => (
        (<div key={recipe.id} className=' bg-gray-100 mx-auto sm:max-w-xs md:max-w-lg rounded-lg shadow-lg hover:shadow-xl flex overflow-hidden'>
          <img src={recipe.image} alt="recipe" srcSet="" className='rounded-tl-lg rounded-bl-lg' />
          <div className='flex-auto'> 
            <h1 className='text-center my-5 text-xl text-gray-600'>{recipe.title}</h1>
            <p className='text-center text-balance text-gray-500'>{recipe.summary}</p>
          </div>
         
        </div>)
      ))}
    </div>
  )
}

export default HomePage

