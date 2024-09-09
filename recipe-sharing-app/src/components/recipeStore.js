import { create } from 'zustand';

const useRecipeStore = () => create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
    // setRecipes : (recipes) => set({ recipes }),
    deleteRecipe: (recipeId) => set((state) => ({ recipes: state.recipes.filter(recipe => recipe.id !== recipeId) })),

    updateRecipe: (updatedRecipe) => set((state) => ({
        recipe: state.recipes.map(recipe =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
    })),

    //updating the store use use filtering function
    filteredRecipes: [],
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    })),
    //update the store for favorites and recommendations
    favorites: [],
    recommendations: [],
    addFavorite: (recipeId) => set((state) => ({ favorites: [...state.favorites, recipeId] })),
    removeFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(favorite => favorite.id !== recipeId)
    })),
    generateRecommendations: () => set(state => ({
        const recommended = state.recipes.filter(recipe => 
            state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
    })),
}))

export default useRecipeStore;