import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "../pages/Home";
import About from "../pages/About";
import Libow from "../pages/Libow";
import LinkBar from "../components/LinkBar";
// import NavBar from "../components/NavBar";
import Work from "../pages/Work";
import Random from "../pages/Random";
import Contact from "../pages/Contact";
import Navbar2 from "../components/NavBar2";




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
          <Route path="/About" component={About} />
          <Route path="/Libow" component={Libow} />
          <Route path="/Work" component={Work} />
          <Route path="/AuHasard" component={Random} />
          <Route path="/Contact" component={Contact} />
       
        </Switch>
       

      </BrowserRouter>
-    </div>
  
  );
};

export default App;
