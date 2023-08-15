const dotenv = require('dotenv')
dotenv.config() // vamos a acceder al objeto PROCESS
const { URL_API, API_KEY } = process.env
const axios = require('axios')
const {Recipe} = require("../db")
const flag = "&addRecipeInformation=true"

// const recipe = async(req, res)=> {
//     // recibir por query es OPCIONAL! 
//     try{
//         const {id} = req.params;
//         const response = await axios(`${URL_API}?apiKey=${API_KEY}${flag}`)
//         const data = response.data.results
//         const foundRecipe = data.find((receta)=>receta.id === Number(id))
//         const foundDB = Recipe.findByPk(Number(id))
//         if(foundRecipe){return res.status(200).json(foundRecipe)}
//         if(foundDB){return res.status(200).json(foundDB)}
//         return res.status(404).send(`The recipe doesnt exist`)
//     }
//     catch(error){
//         return res.status(500).json({error: error.message})
//     }
// }
const recipeById = async (id)=>{
    const {data} = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
    return data
}


module.exports = {recipeById}



// module.exports = recipe;