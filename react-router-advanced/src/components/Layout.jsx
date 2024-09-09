import React from 'react'
import { Link, Outlet} from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li> <Link to="profile">Profile</Link></li>
          <li><Link to="blog">Blog</Link></li>
        </ul>
      </nav>
  
  <h1>navBar</h1>
  <p> A common components to all other, other components goes below this</p>
  <hr />

  <Outlet/>
    </div>
  )
}

export default Layout;