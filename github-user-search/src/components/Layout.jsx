import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
     <div className="bg-red-200">
      <nav className="flex justify-center">
        <ul className="flex items-center gap-4 h-8">
          <li>
            <Link to="/" >Home</Link>
            </li>
          <li>
            <Link to="/advance">Advance Search</Link>
            </li>
        </ul>
      </nav>
    </div>
    <Outlet />
    </>
   
  );
}

export default Layout;
