import React from "react"
import Contact from "./"
import { FaAtlassian } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HOME } from "./ROUTES";

const NavBar=()=>{
    return(
        
       <nav className="navHeader">
           
           <Link to={HOME} className="logo"><FaAtlassian/> Home</Link>
           
             <div className="navHeader-links2">
                 
             <ul>     
            <li> 
                <Link to="/article" className="navHeader-links">Article</Link> 
                <Link to="/snippet"className="navHeader-links" >Snippets</Link> 
                <Link to="/about"className="navHeader-links" >About</Link>
                <Link to="/contact"className="navHeader-links" >Contact</Link> 
            </li> 
    </ul>
        
         </div>
  
       </nav> 
    

    );
}

export default NavBar