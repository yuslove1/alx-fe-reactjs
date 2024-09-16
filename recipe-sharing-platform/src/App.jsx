import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {


  return (
    <>
    <Router>
    <h1>Hello, welcome to tailwind project 2</h1>
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/recipe/:id' element={<RecipeDetail />} />

    </Routes>
    </Router>
    </>
  )
}

export default App
