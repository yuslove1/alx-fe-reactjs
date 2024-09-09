import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Profile from './Profile';
import ProfileSettings from './ProfileSettings';
import ProfileDetails from './ProfileDetails';

function ProfileRoute() {
  return (
    <Routes>
      <Route path="/" element={<Profile />}>
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="details" element={<ProfileDetails />} />
      </Route>
    </Routes>
  );
}

export default ProfileRoute;