const dotenv = require('dotenv')
dotenv.config() // vamos a acceder al objeto PROCESS
const { URL_API, API_KEY } = process.env
const axios = require('axios')

// const recipeByName = async ()=>{
//     // const {data} = await axios(`${URL_API}?apiKey=${API_KEY}&title=${name}`)
//     const {data} = await axios(`${URL_API}?apiKey=${API_KEY}`)
//     return data
// }
const recipeByName = async(name)=>{
   const response = await axios.get(`${URL_API}?apiKey=${API_KEY}&number=100`)
   const recipe = response.data.results.filter((recipe)=> recipe.title.toLowerCase().split(" ")[0] === name.toLowerCase().split(" ")[0])
   if(recipe){ return recipe }
}


module.exports = {recipeByName}