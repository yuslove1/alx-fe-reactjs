import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <>
      <Router>
        <h1>Hello, welcome to tailwind project 2</h1>
        <button className="">
         <Link to="/addrecipe">Add recipe</Link>
         </button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/addrecipe" element={<AddRecipeForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
