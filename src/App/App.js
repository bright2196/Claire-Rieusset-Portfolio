import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "../pages/Home";
import About from "../pages/About";
import Libow from "../pages/Libow";
import LinkBar from "../components/LinkBar";
import NavBar from "../components/NavBar";
import Work from "../pages/Work";
import Random from "../pages/Random";




const App = () => {
  return (
    
    <div className="App">
      
      <div className='LinkBar'>
         <LinkBar/>
         </div>

         
      <BrowserRouter>
      <div className='NavBar'>
         <NavBar/>
         </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Libow" component={Libow} />
          <Route path="/Work" component={Work} />
          <Route path="/AuHasard" component={Random} />
       
        </Switch>
       

      </BrowserRouter>
-    </div>
  
  );
};

export default App;
