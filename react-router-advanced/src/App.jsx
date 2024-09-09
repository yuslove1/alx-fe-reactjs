import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './components/profile';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';
import ProfileRoute from './components/ProfileRoute';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route element={<ProtectedRoute />}>
          <Route path="profile/*" element={<Profile />} />
        </Route>
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />



          {/* <Route path="settings" element={<ProfileSettings />} />
          <Route path="details" element={<ProfileDetails />} />
        </Route> */}
          {/* The protected route */}
          {/* <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route> */}
          {/* <ProtectedRoute path="/profile">
          <Route index element={<Profile />} />
        </ProtectedRoute> */}
          {/* <ProtectedRoute path="/profile" element={<Profile />} /> */}

        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
