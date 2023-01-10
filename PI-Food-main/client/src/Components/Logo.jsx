import React from "react";
import logo from '../hojas-de-estilo/logo.png'
import '../hojas-de-estilo/Logo.css'
export default function Logo(){
    return(
     < nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="/home">Inicio</a>
          </li>
          <li>
            <a href="/createRecipe">Crear mi Receta</a>
          </li>
          <li>
            <a>Sobre mi</a>
          </li>           
        </ul>
      </div>
    </nav>
  );
};
  