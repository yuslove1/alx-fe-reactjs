import './App.css'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Layout from './components/Layout'
import AdvanceSearch from './components/AdvanceSearch'
import Search from './components/Search'

function App() {
  return (
//  <Router>
//   <Routes>
//     <Route path='/' element={<Layout />}>
//     <Route index element={<Search />}/>
//     <Route path='advance' element={<AdvanceSearch />}/>
//     </Route>
//   </Routes>
//  </Router>
<div>
  <Search />
</div>
  )
}

export default App;
