import React from "react";
import { useState ,useEffect} from "react";
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";
import{ useSelector,useDispatch} from "react-redux"
import { getTypes,postRecipe } from "../actions";
import '../hojas-de-estilo/RecipeCreate.css'

function validate(input){
    let errors = {}
    if(!input.name){
        errors.name = "El campo nombre es requerido"
    }else if((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(input.name))){
        errors.name = "El campo nombre solo acepta letras"
    }
    if(!input.summary){
     errors.summary = "Porfavor agrege algún comentario sobre su receta"
    }else if((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(input.summary))){
        errors.summary = "El campo summary solo acepta letras"
    }
    if(!input.image){
        errors.image = "El campo imagen es requerido"
    }else if((!/.+\.(jpg|png)$/.test(input.image))){
        errors.image = "La imagen debe ser de tipo jpg o png"
    }
    if(!input.healthScore){
        errors.healthScore = "Es necesario un valor"
    }else{
        if(input.healthScore < 1 || input.healthScore > 100)
        errors.healthScore = "El puntaje debe ser entre 1 y 100"  
    }
    if (!input.steps){
        errors.steps = "Porfavor detalle los pasos de su receta"
    }else if((!/^[A-Za-z0-9\s]+$/g.test(input.steps.trim()))){
       errors.steps = "El campo paso a paso solo acepta letras y numeros "
    }
    }
    if(!input.dishTypes){
        errors.dishTypes = "Es necesario algún tipo de plato"
    }else if(!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(input.dishTypes.trim())){
        errors.dishTypes = "Solo se aceptan letras"
    }
    return errors



export default function RecipeCreate(){
    const dispatch = useDispatch()// map distpatch to props
    const history = useHistory()
    const dietsTypes = useSelector((state)=> state.diets) //map to props
    const [errors,setErrors] = useState({})
   
  
   

const [input,setInput] = useState({
    name:"",
    summary:"",
    image:"",
    healthScore:"",
    steps:"",
    dishTypes:"",
    diets:[],
    
})

useEffect(()=>{
    dispatch(getTypes())
},[])






function handleInputChange(e){
    setInput({
     ...input,
     [e.target.name]:e.target.value
    })
    setErrors(validate({
        ...input,
        [e.target.name]:e.target.value
}))
}
function handleSelect(e){

    if(!input.diets.includes(e.target.value)){
    setInput({
        ...input,
        diets:[...input.diets,e.target.value]
       
    })
    console.log(input)
}else{
    alert("La dieta ya existe")
}
}


function handleDelete(el){
    setInput({
        ...input,
        diets: input.diets.filter(d=> d !== el) 
    })
}

function handleSubmit(e){
    e.preventDefault()
if(input.name && input.summary&&input.image&&input.healthScore&&input.steps&&input.dishTypes 
&&!errors.name&& !errors.summary&&!errors.image&&!errors.healthScore&&!errors.steps&&!errors.dishTypes&&input.diets.length !==0 &&input.diets.length<=3){
    dispatch(postRecipe(input))
    alert("Receta creada exitosamente")
    setInput({
        name:"",
        summary:"",
        image:"",
        healthScore:"",
        steps:"",
        dishTypes:"",
        diets:[],
       
    })
    history.push('/home')
}else{
    alert("Completa el formulario correctamente")
}
}

return (
    <div className="body">
        <div className="container-form">
        <div className="title-container">
        <h1 className="title">CREA TU RECETA</h1>
        </div>
     <form onSubmit={handleSubmit} className="form">
    <div className="elements-form">
        <label className="label">Nombre:</label>
        <input className="input"
        type = "text"
        name = "name"
        value = {input.name}
        onChange ={handleInputChange}
        />
        {errors.name && <p className="danger">{errors.name}</p>}
    </div>
    <div className="elements-form">
        <label className="label">Resumen:</label>
        <input className="input"
        type = "text"
        name = "summary"
        value = {input.summary}      
        onChange ={handleInputChange} 
        />
         {errors.summary && <p className="danger">{errors.summary}</p>}
        </div>
         <div className="elements-form">
        <label className="label">Imagen:</label>
        <input className="input"
        type = "text"
        name = "image"
        value = {input.image}      
        onChange ={handleInputChange} 
        />
        {errors.image && <p className="danger">{errors.image}</p>}
         </div>
         <div className="elements-form">
        <label className="label">Nivel:</label>
        <input className="input"
        type = "number"
        name = "healthScore"
        value = {input.healthScore}
        onChange ={handleInputChange}
        />
         {errors.healthScore && <p className="danger">{errors.healthScore}</p>}
        </div>
        <div className="elements-form">
        <label className="label">Paso a Paso:</label>
        <input className="input"
        type = "text"
        name = "steps"
        value = {input.steps}
        onChange ={handleInputChange}
        />
         {errors.steps&& <p className="danger">{errors.steps}</p>}
        </div>
        <div className="elements-form">
        <label className="label">Tipos de plato: </label>
        <input className="input"
        type ="text"
        name = "dishTypes"
        value = {input.dishTypes}
        onChange ={handleInputChange}
        /> 
        {errors.dishTypes && <p className="danger">{errors.dishTypes}</p>}      
        </div>
        <div className="select-form">
       <select  onChange ={(e)=>handleSelect(e)} className="select">
        <option selected >Selecciona tus tipos de dieta</option>
        {dietsTypes.map(el=>(
            <option value ={el}>{el}</option>
        ))}
       </select>
       </div>
       
   
       <div className="button-container">
       <button  type = 'submit' className="button-recipe">Enviar Receta</button>
       </div>

        <div className="lista-container">
        <ul>{input.diets.map(el =><li className="lista"><button className="button-recipe"
         onClick={()=>handleDelete(el)}>{el}</button></li>)}</ul>
        </div>
        <div className="button-container">
        <Link to = 'home'><button className="button-recipe">Volver atrás</button></Link>
        </div>

        </form>
    </div>
    </div>
)

}