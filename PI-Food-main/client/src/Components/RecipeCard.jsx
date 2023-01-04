import React from "react";
import '../hojas-de-estilo/RecipeCard.css'

export default function RecipeCard({name,image,diets,}){
    return(
    <div className="cards-recetas">
     <strong><h1 className= "name-recipe">{name}</h1></strong>
     <img  src = {image} alt = "image not found" className="image"/>
     <h2 className="diets-recipe">{diets.join(",  ")}</h2>
  
    </div>
    )
}