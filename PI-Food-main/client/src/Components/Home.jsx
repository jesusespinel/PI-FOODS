import React from "react";
import { getRecipes,getTypes,filterRecipesByDietsTypes,orderByName,orderByScore,cleanFilter,savePage,filterByOrigen } from "../actions";
import { useEffect,useState } from "react";
import { useSelector, } from "react-redux";
import { useDispatch } from "react-redux";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import Paginado from "./Paginado";
import Loader from "./Loader";
import '../hojas-de-estilo/Home.css'




export default function Home(){
   




 const recipes = useSelector((state)=> state.recipes)

 const diets = useSelector((state)=> state.diets)
 

 const pages1 = useSelector(((state)=>state.pages))
 
 const [order,setOrder] = useState("")
 

 //PAGINADO 

 const [currentPage,setCurrentPage] = useState(pages1) 
 const [recipesPerPage,setRecipesPerPage] = useState(9)
 const indexOfLastRecipe = currentPage * recipesPerPage
 const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
 const currentRecipe = recipes.slice(indexOfFirstRecipe,indexOfLastRecipe)

 
 
 const paginado = (pageNumber) =>{
   setCurrentPage(pageNumber)
 } 

 

 function handlePage(e){
   dispatch(savePage(currentPage))
 }
 
 const dispatch = useDispatch()
 useEffect(()=>{
    dispatch(getRecipes())
    dispatch(getTypes())
 },[dispatch])

 function handleClick(e){
   e.preventDefault()
   dispatch(cleanFilter())
   dispatch(getRecipes())
 }

function handleFilterByDiets(e){
   dispatch(filterRecipesByDietsTypes(e.target.value))
   setCurrentPage(1)
   setOrder("Ordenado por" + e.target.value)
   
}

function handleSortByName(e){
   e.preventDefault()
   dispatch(orderByName(e.target.value))
   setCurrentPage(1)
 setOrder("Ordenado por" + e.target.value)
   
}
 function handleSortByScore(e){
   dispatch(orderByScore(e.target.value))
   setCurrentPage(1)
   setOrder("Ordenado por" + e.target.value)

 }

 /* function handleFilterByOrigen(e){
   dispatch(filterByOrigen(e.target.value))
   setCurrentPage(1)
   setOrder("Ordenado"+e.target.value)
 }
  */
 
 

 return (
   
    <div className="contenedor-principal">
    <div className="navbar-container">
      <div className="recipe-container">
      <button className="button-recipe"onClick={(e)=>{handleClick(e)}}>Refrescar</button>
     <Link to = '/createRecipe'><button className="button-recipe">Quiero mi receta!</button></Link>
     </div>
     
            
      <div className="contenedor-filtros">
         <select onChange={handleFilterByDiets} className="filtros">
           <option value = 'tipos'>Filtrar por tipo</option>
          
          <option value="gluten free">gluten free</option>
           <option value ="dairy free">dairy free</option>
           <option value ="lacto vegetarian">lacto  vegetarian</option>
           <option value ="ovo vegetarian">ovo vegetarian</option>
           <option value ="lacto ovo vegetarian">lacto ovo vegetarian</option>
           <option value ="vegan">vegan</option>
           <option value ="paleolithic">paleolithic</option>
           <option value ="primal">primal</option>
           <option value ="whole 30">whole 30</option>
           <option value="pescatarian">pescatarian</option>
           <option value ="fodmap friendly">fodmap friendly</option>
           <option value ="ketogenic">ketogenic</option>
          <option value ="vegetarian">vegetarian</option> 
           
    
         </select>
         <select onChange={(e)=>handleSortByName(e)} className="filtros">
            <option value ='All'>Ordenar alfabeticamente</option>
            <option value = 'asc'>A:Z</option>
            <option value = 'des'>Z:A</option>
         </select>

         <select onChange={handleSortByScore} className="filtros">
            <option value = 'default'>Ordenar por puntaje de salud</option>
            <option value= 'min'>Min to Max</option>
            <option value= 'max'>Max to Min</option>
         </select>

        {/*  <select onChange={handleFilterByOrigen}>
            <option value = "created">CREADOS</option>
            <option value = "api">EXISTENTES</option>
         </select> */}
         
        

      </div>
      
         <div className="searchbar-container">
         <SearchBar/>
         </div>
      
         </div>
   
      <Paginado
                recipesPerPage={recipesPerPage}
                recipes={recipes.length}
                paginado ={paginado}            
                />
   
      
     <div className="contenedor-cards">
 {  
    currentRecipe?.map(el=>{
        return(
         < Link onClick={(e)=>handlePage(e)} to = {'/detailsRecipes/' + el.id }>
            <RecipeCard key ={el.id}
             name ={el.name}
             image ={el.image}
             diets ={el.diets}
             />
            </Link>
        )     
    })
  } 
  
  {recipes.length === 0 && <Loader/>}
</div>
    </div>
 )

}