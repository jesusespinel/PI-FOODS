const Router = require('express');
const router = Router()
const {Diet,Recipe} = require('../db')
const {dietTypesDb} = require('../Controllers/types')
 



router.get('/', async (req, res) => {
    
    try {   
    dietTypesDb.forEach(e => {
            Diet.findOrCreate({
                where: { name: e}
            })
    })
     const dietTypes = await Diet.findAll();
      return res.status(200).send(dietTypesDb)

    } catch (error) {
        console.log(error)
        res.status(404).send('No se encuentran dietas disponibles')
    }

})



   



module.exports = router
//glute free
//Ketogenic
//Vegetarian
//Lacto-Vegetarian
//Ovo-Vegetarian
//Vegan
//Pescetarian
//Paleo
//Primal
//Low FODMAP
//Whole30
