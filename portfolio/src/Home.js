import React from "react"
import {FaNodeJs} from "react-icons/fa";
import Header from "./component/Header";
import imgjs from "./image/JavaScriptPicture.png"
import imgcss from "./image/CSS3_logo_.png"
import imgreact from "./image/reactPicture.png"
import imgking from "./image/King.jpg"
import {FaForward} from "react-icons/fa";
import  "./index.css"
import Button from "./Button";
import NavBar from "./NavBar";
import Divcomp from "./Divcomp";

const Home=()=>{
    return(
<div>
   <div className="HomeDiv">
       <NavBar/>
       <div className="header">
           <div className="header1">
           <Header
                title="Hi everyone ,I'm Nwafor Kingsley Chukwudi and  I am  a Software 
                Engineer and an Interface Designer"
                subtitle="I specialize in rapidly prototyping software companies and
                 web applications."
           />
            <p className="pmore">
                I talk about my journey on <a href="https://www.twitter.com/king_chudi">Twitter</a>, commit code to <a href="https://github.com/kingsleynwafor54">Github</a>,<br></br> 
                take shots on <a href="https://dribbble.com/king_chudi1">dribble</a>. 
                <br></br> 
            
            </p>
            </div>
            <div className ="header1">
            {/* <img className ="king" src={imgking}/> */}
            </div>
        
        </div>
    <div className="articleType">
    <header>
        <div className="navHeader1">
    <h2>Latest_Articles</h2>  <div className="p"><h4>All_article <FaForward className="hova"/></h4> </div></div>
      
       <p > <img className="photo" src={imgjs}/>Reducing cognitive load by theming my load</p>
       <h3 className="article1">September 08 2019</h3>
       <p > <img className="photo" src={imgcss}/>Reducing cognitive load by theming my load</p>
       <h3 className="article1">September 08 2019</h3>
        <p> <img className="photo" src={imgreact}/>Reducing cognitive load by theming my load</p> 
        <h3 className="article1">September 08 2019</h3>
       
    </header>
    </div>
    
    <div className="parent">
    <h1>Projects</h1>
        <div className="parent1" >
       <Divcomp/>
        </div>
        <div className="parent2">
        <div className="child" className="k">
            <Divcomp/>
        </div>
        <div className="child" className="k1">
        <Divcomp/>
        </div>
        </div>
  
    </div>
    
    </div>
    <Divcomp/>
    </div>

    );
}
export default Home