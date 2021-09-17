import logo from './logo.svg';
import  './App.css';
import NavBar from './NavBar';
import * as routes from './ROUTES'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About'
import Home from './Home'
import  "./index.css"
import divcomp from './Divcomp';



const App=()=>{
  return(
    <div className="navDesign">
      <Router>
        
          {/* <NavBar />   */}
        
        <Switch>
         <Route exact path={routes.HOME} component={Home}/>
          <Route path={routes.ABOUT} component={About}/>
          <Route path={routes.ARTICLES}/>
          <Route path={routes.SNIPPETS}/>
          <Route path={routes.CONTACT}/>
        </Switch>
        
      </Router>
      
      </div>
  
  )
}
export default App;
