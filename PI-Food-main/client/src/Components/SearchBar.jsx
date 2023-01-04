import React from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName,} from "../actions";


    export default function SearchBar(){
    
        const [name,setName] = useState("")
        const dispatch = useDispatch()

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        
        console.log(name)
       }
     function handleSubmit(e){
        e.preventDefault()
        if(name.length===0){
            Swal.fire({
                title:'Por favor ingrese una receta para iniciar la búsqueda',
                icon:'error',
                confirmButtonText: 'Regresar'
            })
        }else{
        dispatch(getName(name))
        setName("")
     }
    }

    

    return (
        <div className="searchbar">

            <input className="buscador"
            type = "text"
            placeholder="Busca tu receta.."
            onChange={handleInputChange}
            value={name}
            />
            <button type = 'submit'onClick={handleSubmit} className="button-recipe">Buscar</button>
            
            
            
            
        </div>
    )
}