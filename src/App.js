import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./components/navbar"
import Home from './components/home'

function App() {
  return (

    <Router>

      <Navbar/>
      <Home/>
    </Router>
   
  );
}

export default App;
