import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import ProfileSettings from './ProfileSettings';
import ProfileDetails from './ProfileDetails';

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <ul>
        <li><Link to="settings">Settings</Link></li>
        <li><Link to="details">Details</Link></li>
      </ul>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa aliquam, odit recusandae facilis quam, consequuntur a impedit obcaecati quo rem provident iure pariatur repellat?</p>
    
    
    
    
      <Routes>
        <Route path="/settings" element={<ProfileSettings />} />
        <Route path="/details" element={<ProfileDetails />} /> 
    </Routes>
    </div>
  )
}
export default Profile;
