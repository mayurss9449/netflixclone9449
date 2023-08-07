import React, {useEffect} from 'react'
import './App.css';
import Homescreen from './Components/Homescreen';
import LoginScreen from './Components/LoginScreen';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { auth } from './Components/firebase';

function App() {
  const user = true;
  
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        // logged in
        console.log(userAuth);
      }else{
        // Logged out
      }
    });
    return unsubscribe ;
  },[]);

  return (
    <div className="app">
    <Router >
    {!user ?  (
      <LoginScreen />
    ): (
      <Routes >
      {/* <Homescreen /> */}
      <Route path='/' element={<Homescreen />} />
      </Routes>
    )}
      
    
    </Router>
    </div>
  );
}

export default App;
