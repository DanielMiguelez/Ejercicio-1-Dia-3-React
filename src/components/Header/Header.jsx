import React from "react";
import { Link } from "react-router-dom";
import './Header.css'


const Header = () => {
    return(
      <nav>
        <div className="headerestilos">
            <span><Link to="/contact">Contact</Link></span>
            <br />
            <br />
            <span><Link to="/">Home</Link></span>
        </div>
        <div>
            <h1>Mi dura vida con react</h1>
        </div>
    </nav>  
    )
      };
    
export default Header;