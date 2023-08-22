const dotenv = require('dotenv')
dotenv.config() // vamos a acceder al objeto PROCESS
const { URL_API, API_KEY } = process.env
const axios = require('axios')
const flag = "&addRecipeInformation=true"


const recipeByName = async(name)=>{
   const response = await axios.get(`${URL_API}?apiKey=${API_KEY}${flag}&number=100`)
   const recipe = response.data.results.filter((recipe)=> recipe.title.toLowerCase().split(" ")[0] === name.toLowerCase().split(" ")[0])
   const destructuring = recipe.map(({id, title, image, diets})=>({id, title, image, diets}))
   if(destructuring){ return destructuring }
}
const getAll = async()=>{
   const response = await axios.get(`${URL_API}?apiKey=${API_KEY}${flag}&number=100`);
   const result = response.data.results
   const arrayRecipes = result.map(({id, title, image, diets})=>({id, title, image, diets}))
   if(arrayRecipes){return arrayRecipes}
}

module.exports = {recipeByName, getAll}