import React from "react";
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
const Navbar = (props)=>{
  const Navigate = useNavigate();
    return (
        <div className="navbar">
          <div className="logo">AGGROW</div>
          <ul className="navbar-menu">
            <li>Home</li>
            <li>Services</li>
            <li>Track</li>
          </ul>
          
            {props.value === true ? <button onClick={()=>Navigate("/signin")} className="signin">SIGN IN</button> : <></>}
          
        </div>
    )
}

export default Navbar;