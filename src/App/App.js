import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "../pages/Home";
import About from "../pages/About";
import Libow from "../pages/Libow";


const App = () => {
  return (
    
    <div className="App">

 
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Libow" component={Libow} />
       
        </Switch>
      </BrowserRouter>
      
    </div>
  
  );
};

export default App;
