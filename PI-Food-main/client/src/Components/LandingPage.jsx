import React from "react";
import { Link } from "react-router-dom";
import '../hojas-de-estilo/LandingPage.css'

export default function LandingPage(){
    return(
        <div className="landing-page">
        <div className="titulo">
        <h2 className="title">Recetas saludables para tu bienestar!</h2>
         <strong><p>Conoce los mejores tipos de recetas disponibles para una mejor salud.</p></strong>
          <br></br>      
            <Link to ='/home'>              
        <button className="button-landing">Más información</button>
            </Link>
            </div>
         
        </div>
    )
}