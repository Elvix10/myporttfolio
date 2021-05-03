import React from 'react'
import {Link} from 'react-router-dom'
import './styles/navBar.scss'


 const Navbar = () => {
    return (
       <div className="navbar">
         <div className ="navbar-container">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/about">About Me</Link>    
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
             </ul>   
            
        </div>
       </div>
    )
}


export default Navbar
