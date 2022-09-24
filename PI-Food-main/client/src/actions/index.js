import axios from "axios"

export const getRecipes = () =>(dispatch) =>{
    return fetch("http://localhost:3001/recipes")
    .then((r)=>r.json())
    .then((data)=>dispatch({type:"GET_RECIPES",payload:data}))
}

export const getTypes = () =>(dispatch) =>{
    return fetch("http://localhost:3001/diets")
    .then((r=>r.json()))
    .then((data)=>dispatch({type:"GET_TYPES",payload:data}))
}

export function getName(name){
    return async function(dispatch){
        try {
            var json = await axios.get("http://localhost:3001/recipes?name="+ name)
            return dispatch({type:"GET_NAME",payload: json.data })
            
        } catch (error) {
            console.log(error)
        }
    }
}





export function filterRecipesByDietsTypes(payload){
    console.log(payload)
   return{
           type: "FILTER_RECIPES_BY_DIETS_TYPES",
           payload
   }
            
}


export function orderByName(payload){
    return{
        type: "ORDER_BY_NAME",
        payload
    }
}

export function orderByScore(payload){
    return{
        type:"ORDER_BY_SCORE",
        payload
    }
}

export function postRecipe(payload){
    return async function(dispatch){  
const response = await axios.post("http://localhost:3001/recipes",payload)
console.log(response) 
return response
    }
}
/*export function getDetail(id){
    return function(dispatch){
        axios.get("http://localhost:3001/recipes/" +id)
        .then((response) =>{
            return dispatch({type:"GET_DETAILS",payload:response.data})
        }).catch((error) =>{
            console.log (error)
    }
  )
}
} */

/*export function getDetail(id){
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/recipes/${id}`);
      return dispatch({
        type: "GET_DETAIL",
        payload: json.data,
      });
    } catch (error) {
      console.log("ID not found");
    }
  }
} */


export const getDetail= (id) =>(dispatch) =>{
    return fetch(`http://localhost:3001/recipes/${id}`)
    .then((r)=>r.json())
    .then((data)=>dispatch({type:"GET_DETAIL",payload:data}))
}

export function cleanFilter(){
    return {
        type:"CLEAN_FILTER",
        payload:[]
    }
}

/*export function deleteRecipe(id){
    return function(dispatch){
        axios.delete(`http://localhost:3001/recipes/${id}`)
        .then((response)=>{
            return dispatch({type:"DELETE_RECIPE",payload:response.data})
        })
        .catch((error) =>{
            console.log (error)
    })
} */
/*export const deleteRecipe= (id) =>(dispatch) =>{
    return fetch(`http://localhost:3001/recipes/${id}`,{ method: 'DELETE' })
    .then((r)=>r.json())
    .then((data)=>dispatch({type:"DELETE_RECIPE",payload:data}))
} */

export  function deleteRecipe(id){
    return async function (dispatch){
        try {
            var deleteRecipe = await axios.delete("http://localhost:3001/recipes/"+ id)
            return dispatch({
                type: "DELETE_RECIPE"
            })
        } catch (error) {
            console.log(error)
        }
    }
}




export function savePage(payload){
    return ({
        type:"SAVE_PAGE",
        payload
    })
}


export function filterByOrigen(payload){
    return({
        type:"FILTER_BY_ORIGEN",
        payload
    })
}
