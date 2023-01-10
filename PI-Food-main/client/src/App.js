import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import LandingPage from './Components/LandingPage.jsx'
import Home from './Components/Home.jsx';
import RecipeCreate from './Components/RecipeCreate'
import Details from './Components/Details';
import ErrorNotFound from './Components/ErrorNotFound';

import axios from 'axios';
axios.defaults.baseURL = "https://pi-foods-production-1710.up.railway.app/";
//"https://pi-foods-production-1710.up.railway.app/

function App() {
  return (
    
    <BrowserRouter>
    <div>
   <Switch>
     <Route exact path= '/' component ={LandingPage}/>
     <Route path= '/home'><Home/></Route>
     <Route path = '/createRecipe' component ={RecipeCreate}/>
     <Route path = '/detailsRecipes/:id' component = {Details}/>
     <Route path = '*' component = {ErrorNotFound}/>     
   </Switch>
  
    </div>
    </BrowserRouter>
  );
}

export default App;
