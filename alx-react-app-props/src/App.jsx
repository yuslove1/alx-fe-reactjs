import React from 'react';
import './App.css'
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';
import UserProfile from './components/UserProfile';

  function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com", age :"25", bio:"Loves hiking and photography" };
  
    return (
      <UserContext.Provider value={userData}>
        <div>
        <ProfilePage userData={userData} />

        <UserProfile userData={userData} />
        </div>
      </UserContext.Provider>
    )

   
  }
  
  export default App;