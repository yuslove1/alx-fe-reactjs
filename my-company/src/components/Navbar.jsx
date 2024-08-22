import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav style={{backgroundColor:"lightblue", display: 'flex', justifyContent: 'space-between', alignItems:'center', padding:'0 10px'}}>
        <div>MY-LOGO</div>
        <ul style={{display: 'flex', textDecoration: 'none', gap: '10px', listStyle: 'none'}}>
            <li ><Link to="/" style={{textDecoration:'none'}} >Home</Link></li>
            <li> <Link to="services" style={{textDecoration:'none'}} >Service</Link> </li>  
            <li> <Link to="about" style={{textDecoration:'none'}} >About</Link> </li>
            <li><Link to="contact" style={{textDecoration:'none'}} >Contact</Link></li>  
        </ul>
    </nav>

    <Outlet />
    </>
  )
}

export default Navbar;
