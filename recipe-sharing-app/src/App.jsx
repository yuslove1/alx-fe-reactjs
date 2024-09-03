// import './App.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import AddRecipeForm from './components/AddRecipeForm';



function App() {

  return (
    <BrowserRouter>
       <SearchBar />
      <FavoritesList />
      <RecommendationsList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route pathq="/" element={<AddRecipeForm />} />
        <Route path=":id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
