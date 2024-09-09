import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import ProtectedRoutes from './components/ProtectedRoute';
import NotFound from './components/NotFound';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Route>
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:postId' element={<BlogPost />} />
        <Route path= '*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
