import useRecipeStore from '../store/useRecipeStore';


function RecipeList() {
    const recipes = useRecipeStore(state => state.recipes);
  return (
    <div>
     {recipes.map(recipe => (
        <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
        </div>
     ))}  
    </div>
  );
};

export default RecipeList;


// import { useRecipeStore } from '../store/useRecipeStore';

//   const RecipeList = () => {
//     const recipes = useRecipeStore(state => state.recipes);

//     return (
//       <div>
//         {recipes.map(recipe => (
//           <div key={recipe.id}>
//             <h3>{recipe.title}</h3>
//             <p>{recipe.description}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   export default RecipeList;