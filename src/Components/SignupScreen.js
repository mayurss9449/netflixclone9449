import React, {useRef} from 'react'

import  {auth}  from './firebase';
import './SignupScreen.css'

function SignupScreen() {
  
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
    emailRef.current.value,
    passwordRef.current.value
    )
    .then((authUser) =>{
      console.log(authUser);
    })
    
    .catch((error)=>{
      alert(error.message);
    });
    
  };

  const signIn = (e) =>{
    e.preventDefault();

    auth
    .signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser)=>{
      console.log(authUser);
    })
    .catch((error)=>alert(error.message));
  };
  return (
    <div className='signupscreen'>
      <form action="">
        <h1 >Sign In </h1>
        <input ref={emailRef} 
         type="Email" placeholder='Email' name="email" id="" required/>

        <input ref={passwordRef} 
        type="password" placeholder='Password' name="password" id="" required/>

        
        <button type='submit' 
        onClick={signIn}>
          Sign In </button>
          
       
        <h4>
         <span className='signupscreen-gray'>New to Netflix?</span>
         <span className='signupscreen-link' onClick={register}> Sign Up now</span> 
        </h4>
        
      </form>
    </div>
  )
}

export default SignupScreen
