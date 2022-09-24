import React from "react";
import {Link} from "react-router-dom"
import '../hojas-de-estilo/ErrorNotFound.css'

export default function ErrorNotFound(){
    return (
        <div className="not-found">
            <h1>ERROR 404 NOT FOUND</h1>
            <Link to = "/home">
            <button className="button-recipe">Volver</button>
            </Link>
        </div>
    )

}