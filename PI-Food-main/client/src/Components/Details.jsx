
import React from "react";
import Loader from "./Loader";
import { Link,} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail,cleanFilter,deleteRecipe } from "../actions/index";
import { useEffect } from "react";
import '../hojas-de-estilo/Detail.css'
import { useHistory } from "react-router-dom";

//Array.isArray(myRecipe.steps)?myRecipe.steps.map(el=><li>{el}</li>)
export default function Details(props) {
 
const dispatch = useDispatch();
const history = useHistory()

useEffect(() => {
  dispatch(getDetail(props.match.params.id));
 return(()=>{
  dispatch(cleanFilter())
 })
},[dispatch,props.match.params.id]);



const myRecipe = useSelector((state) => state.detail);
console.log(myRecipe)

return( // renderizamos el detalle
  <div>
    <div className="container">
      {
         myRecipe.length>0?
    <div>
    <div>
    <h2 className="title">{myRecipe[0].name}</h2>
    </div>
    <div className="container-imagen">
    <img src ={myRecipe[0].image } alt = "img" className="imagen-detalle"/> 
    </div>
    <div className="container-dishtypes">
    <p><p className="negrita">Dishtypes:</p>   {myRecipe[0].dishTypes}</p>
    </div>
    <div className="container-diets">
    <span className="tipo-dieta negrita">Diets:</span>
    </div>
    <div className="container-diets">
    <span>{myRecipe[0].diets.map(el=> <p className="button-recipe">{el}</p>)}</span>
    </div>
    <div className="health-score">
    <p><p className="negrita">HealthScore:</p> {myRecipe[0].healthScore}</p>
    </div>
    <div className="summary-container">
    <p><p className="negrita">Summary:</p>  {myRecipe[0].summary.replace(/<[^>]*>/g, '')}</p>  
    </div>
    <div className="summary-container">
    <p className="negrita">Steps:</p>
    </div>
  <div className="steps-container">
<ol>{Array.isArray(myRecipe[0].steps)? myRecipe[0].steps.map(el=>{
      return (
        <li className="items-lista">{el}</li>
      )
    }
    ):
    <li>{myRecipe[0].steps}</li>
  }
    </ol> 
    <div className="button-containerone">
  <Link to = '/home'>
    <button className="button-recipe">Volver atr??s</button></Link>
  </div>
   </div>
        </div>:<div> <Loader/> </div>
              
   }
  </div>
  </div>
)

}
