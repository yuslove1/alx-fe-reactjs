// import './App.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import RecipeDetails from './components/RecipeDetails';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route pathq="/" element={<AddRecipeForm />/>
        <Route path=":id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
