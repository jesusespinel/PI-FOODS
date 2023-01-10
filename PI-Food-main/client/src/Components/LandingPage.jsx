import React from "react";
import { Link } from "react-router-dom";
import '../hojas-de-estilo/LandingPage.css'
//import salad from '../hojas-de-estilo/salad.png'
//import logo from '../hojas-de-estilo/logo.png'
import Logo from "./Logo";
export default function LandingPage(){
    return(      
            <div className="banner">
              <Logo />
              <div className="banner__content">
                    {/* <img className="salad" src={salad} />  */}
                <div className="container-lp">
                  <div className="banner__text">
                    <h3>Health & Food</h3>
                    <h1>RECETAS SALUDABLES </h1>
                  <strong> <p>
                   Conoce una colección de más de 1000 recetas saludables para una mejor salud y estilo de vida.
                    </p> </strong>

                    <div className="banner__btn">
                      <a href="/home" className="btn btn-smart">
                        Más información
                      </a>
                      {/* <div className="lp-img">
                        <img className="salad" src={salad} />
                      </div>  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        };

