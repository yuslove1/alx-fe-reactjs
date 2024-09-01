import useRecipeStore from '../store/recipeStore';


function RecipeList() {
    const recipes = useRecipeStore(state => state.recipes);
  return (
    <div>
     {Array.isArray(recipes) ? recipes.map(recipe => (
        <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
        </div>
     )) : <p>No recipe available</p>}  
    </div>
  );
};

export default RecipeList;