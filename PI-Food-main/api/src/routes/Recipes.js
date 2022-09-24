const Router = require('express');
const router = Router()
const infoTotal = require('../Controllers/getData.js')
const {Recipe,Diet} = require('../db')
const { Op } = require('sequelize');

router.get('/',async (req,res)=>{
    const{ name} = req.query
    const recipes=   await infoTotal()
    try {
    if(name){

     const nameRecipes = recipes.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
     if(nameRecipes){
       return  res.status(200).send(nameRecipes)
     }
    }
    return res.status(200).send(recipes)
    } catch (error) {
        console.log(error)
     return   res.status(404).send('No existen recetas disponibles')
    }
}) 



router.get('/:id',async (req,res)=>{
    const {id} = req.params
    const recipes=   await infoTotal()
    try {
        if(id){
            const recipesId = recipes.filter(el=>el.id == id)
            if(recipesId){
             return   res.status(200).send(recipesId)
            }
        }
    } catch (error) {
        console.log(error)
       return res.status(404).send('No se encontró receta disponible por id')
    }
   
}) 






       

    
router.post('/',async (req,res)=>{
    const{image, name,summary,healthScore,steps,diets,dishTypes,} = req.body
    try {
    
        const newRecipe = await Recipe.create({
            name,
            summary,
            healthScore,
            steps,
            dishTypes,
            image,
           

        })
        const typeDiet = await Diet.findAll({
            where:{
                name:diets
            }
        })
        newRecipe.addDiet(typeDiet)
        res.status(201).send('Receta creada correctamente')
    } catch (error) {
        console.log (error)
    }
})









module.exports = router