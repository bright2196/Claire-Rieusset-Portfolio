import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "../pages/Home";
import About from "../pages/About";
import Libow from "../pages/Libow";
import LinkBar from "../components/LinkBar";
// import NavBar from "../components/NavBar";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import Navbar2 from "../components/NavBar2";
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
  return (
    
    <div className="App">
      
      <div className='LinkBar'>
         <LinkBar/>
         </div>

         
      <BrowserRouter>
      <div className='NavBar'>
          <Navbar2/>     
         </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/a-propos" component={About} />
          <Route path="/libow-project" component={Libow} />
          <Route path="/tous-mes-travaux" component={Work} />
          <Route path="/contact" component={Contact} />
       
        </Switch>
       

      </BrowserRouter>
-    </div>
  
  );
};

export default App;
