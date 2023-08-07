import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

    const [show, setShow] = useState(false);
    const navbarBlack = ()=>{
        if(window.scrollY > 100) {
            setShow(true);
        }else{
            setShow(false);
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll",navbarBlack);
        return ()=> window.removeEventListener("scroll", navbarBlack);

    },[]);

  return (
    <div className={`navbar ${show && 'navbar-black'}`}>
        <div className='navbar-contents'>
      <img className='navbar-logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
      <img className='navbar-pro' src="https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png" alt="" />
      </div>
    </div>
  )
}

export default Navbar
