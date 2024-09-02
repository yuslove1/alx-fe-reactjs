import React, { useState } from 'react'
import useRecipeStore from './recipeStore'

function EditRecipeForm({ recipeId }) {
    const recipe = useRecipeStore((state) => state.recipes.find(recipe => recipe.id === recipeId));
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.setDescription);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe({ id : recipe.id, title, description });
        setTitle('');
        setDescription('');
    };
    return (
     <form onSubmit={handleSubmit}>

        <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
        />

        <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        />
        <button type="submit">Add Recipe</button>
     </form>
    );
};

export default EditRecipeForm;
