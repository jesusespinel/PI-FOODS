import React from "react";
import { Link } from "react-router-dom";
import '../hojas-de-estilo/LandingPage.css'

export default function LandingPage(){
    return(
        <div>
        <div className="landing-page">
            <div className="button-welcome">
            <Link to ='/home'>              
        <button className="button-recipe ">INGRESAR</button>
            </Link>
            </div>
        </div>  
        </div>
    )
}