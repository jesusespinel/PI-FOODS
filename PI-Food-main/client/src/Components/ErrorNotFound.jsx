import React from "react";
import {Link} from "react-router-dom"
import '../hojas-de-estilo/ErrorNotFound.css'

export default function ErrorNotFound(){
    return (
        <div className="not-found">
            <h1 className="text">Oops!..Lo sentimos, página no encontrada</h1>
            <button className="button-recipe">Volver atrás</button>
            <br></br>
            <img src="https://i.imgur.com/WvEu0cO.png" height="500" weight ="500" alt="page not found"/>
            <div className="btn-cont">
            <Link to = "/home">
                <br></br>
                <br></br>
           
            </Link>
            </div>
            
        </div >
    )

}