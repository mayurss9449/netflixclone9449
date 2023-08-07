import React, { useState } from 'react'
import './LoginScreen.css';
import SignupScreen from "./SignupScreen";


function LoginScreen() {

    const [signIn, setSignIn] = useState(false)
  return (
    <div className='loginscreen'>
      <div className="loginscreen-background">
        
        <img className='loginscreen-logo'
         src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
         <button   onClick={()=>setSignIn(true)}
          className='loginscreen-buttom'>
            Sign In 
         </button>

         <div className="loginscreen-gradient"></div>
         <div className="loginscreen-body">
            {signIn ? (
                <SignupScreen />
            ) :(

          
            <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginscreen-input">
                <form action="">
                    <input type="email" placeholder='Email Address' name="" id="" />
                    <button  onClick={()=>setSignIn(true)}
                     className='loginscreen-getstarted'>GET STARTED</button>
                </form>
            </div>
            </>
              )}

         </div>
         
      </div>
      
    </div>
  )
}

export default LoginScreen
