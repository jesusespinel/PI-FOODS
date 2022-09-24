const  axios = require('axios').default;
const{Recipe,Diet} = require( '../db')

const {API_KEY} = process.env

const getDataApi = async() =>{
 try {
const recipeUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    
      const infoRecipe = recipeUrl.data.results.map(el=>{
            return{
                  id:el.id,
                  name:el.title,
                  healthScore: el.healthScore,
                  summary: el.summary,
                  image:el.image,
                  diets:el.diets,
                  dishTypes: el.dishTypes,
                  steps: el.analyzedInstructions[0]?.steps.map(el=>el.step),
            
                                                                 
            }
      })
      
      return infoRecipe
 } catch (error) {
      console.log(error)
    
 }
}

const dbInfo = async() =>{
 try {
      const dbRecipe = await Recipe.findAll({
            include:{
                  model:Diet,
                  attribute:['name'],
                  through:{
                        attributes: [],
                    }
            }
         
      })
      
      var dato = JSON.parse(JSON.stringify(dbRecipe, null, 2))
      dato.forEach(el=>el.diets = el.diets.map(el=> el.name))

      return dato

 } catch (error) {
      console.log(error)
 }
}

const infoTotal = async() =>{
      try {
            const apiInfo = await  getDataApi()
            const dbRecipe = await dbInfo()
            const infoTotal = apiInfo.concat(dbRecipe)
            return infoTotal
      } catch (error) {
            console.log(error)
      }
}


module.exports = infoTotal