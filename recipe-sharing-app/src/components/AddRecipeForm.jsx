import { useState } from "react";
import useRecipeStore from "./useRecipeStore";

function AddRecipeForm() {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({id : Date.now(), title, description});
        setTitle('');
        setDescription('');
    };

    return (
     <form onSubmit={handleSubmit}>

        <input 
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="title"
        />

        <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
        />
        <button type='submit'>Add Recipe</button>

     </form>
    );
};

export default AddRecipeForm;
