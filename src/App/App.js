import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";


import Home from "../pages/Home";
import About from "../pages/About";
import Libow from "../pages/Libow";
import Adapt from "../pages/Adapt"
import ReV from "../pages/RV"
import MPA from "../pages/MPA"
import N2G from "../pages/N2G"
import LinkBar from "../components/LinkBar";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import Navbar2 from "../components/NavBar2";
import 'bootstrap/dist/css/bootstrap.min.css';
import CV from "../pages/CV/CV";
import WaitingPage from "../pages/WaitingPage/WaitingPage";
import TheorieAnime from "../pages/TheorieAnime/TheorieAnime";
import CursorProvider from "../components/Cursor/Cursor";
import VitrineVerte from "../pages/VitrineVerte";




const App = () => {
  return (
    <CursorProvider>
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
          <Route path="/adapt-project" component={Adapt} />
          <Route path="/reve-et-ville-project" component={ReV} />
          <Route path="/mes-petites-adresses-project" component={MPA} />
          <Route path="/vitrine-verte-project" component={VitrineVerte} />
          <Route path="/theorie-animee" component={TheorieAnime} />
          <Route path="/nilk2go-project" component={N2G} />
          <Route path="/tous-mes-travaux" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route path="/cv-claire-rieusset" component={CV} />
          <Route path="/en-travaux" component={WaitingPage} />

       
        </Switch>
       

      </BrowserRouter>
-    </div>
  </CursorProvider>
  );
};

export default App;
