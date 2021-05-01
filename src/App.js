import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./components/navbar"
import Home from './components/home.js'
import AboutMe from './components/aboutMe'
import Projects from './components/projects'

function App() {
  return (

    <Router>

      <Navbar/>
      <Home/>
      <AboutMe/> 
      <Projects/> 
      
      <Switch>
        <Route path='/'>
        </Route>
      </Switch>

      <Switch>
        <Route path='/about'>   
         
        </Route>
      </Switch>

      <Switch>
        <Route path='/projects'>  
              
        </Route>
      </Switch>
      
      
      
    </Router>
   
  );
}

export default App;
