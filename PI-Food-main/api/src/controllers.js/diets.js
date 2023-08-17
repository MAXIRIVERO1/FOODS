const dotenv = require('dotenv')
dotenv.config() // vamos a acceder al objeto PROCESS
const { URL_API, API_KEY } = process.env
const axios = require('axios')
const flag = "&addRecipeInformation=true"

const dietController = async ()=>{
    const response = await axios.get(`${URL_API}?apiKey=${API_KEY}${flag}`)
    const diet = response.data.results.map((recipe)=>recipe.diets)
    console.log(diet)
    if(diet) return diet
}


module.exports = {dietController}