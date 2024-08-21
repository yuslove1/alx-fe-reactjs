import React from 'react';
import './App.css'
import ProfilePage from './components/ProfilePage';
import userContext from './contexts/UserContext';

  function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  
    return (
      <userContext.Provider value={userData}>
      <ProfilePage userData={userData} />
      </userContext.Provider>
    )

   
  }
  
  export default App;