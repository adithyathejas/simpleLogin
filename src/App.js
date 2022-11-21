import React, { useState,useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(()=>{
    const loginLocalStorageInf= localStorage.getItem('isLoggedIn')
    console.log(loginLocalStorageInf)
    if(loginLocalStorageInf==='1'){
      setIsLoggedIn(true) 
    }

  },[])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn',1)
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn',0)
    setIsLoggedIn(false);
  };

  return (
     <AuthContext.Provider value={{
      isLoggedIn:isLoggedIn,
      onLogout:logoutHandler,
      onLogin:loginHandler
     }}>
      <MainHeader  />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
      </AuthContext.Provider>
   
  );
}

export default App;
