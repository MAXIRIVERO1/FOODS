const dotenv = require('dotenv')
dotenv.config() // vamos a acceder al objeto PROCESS
const { URL_API, API_KEY } = process.env
const axios = require('axios')
const flag = "&addRecipeInformation=true"

// const recipeByName = async ()=>{
//     // const {data} = await axios(`${URL_API}?apiKey=${API_KEY}&title=${name}`)
//     const {data} = await axios(`${URL_API}?apiKey=${API_KEY}`)
//     return data
// }
const recipeByName = async(name)=>{
   const response = await axios.get(`${URL_API}?apiKey=${API_KEY}`)
   const recipe = response.data.results.find((recipe)=> recipe.title === name)
   if(recipe){ return recipe }
}


module.exports = {recipeByName}