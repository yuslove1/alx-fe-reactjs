import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Search from './components/Search'

function App() {
  return (
    <>
   <h1>Search Github Username here</h1>
   <Search />
    </>
  )
}

export default App
