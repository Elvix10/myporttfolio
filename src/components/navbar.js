import React from 'react'
import {Link} from 'react-router-dom'
import './styles/navBar.scss'


 const Navbar = () => {
    return (
       <div className="navbar">
         <div className ="navbar-container">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>    
                <Link to="/dashboard">Projects</Link>
            
        </div>
       </div>
    )
}


export default Navbar
