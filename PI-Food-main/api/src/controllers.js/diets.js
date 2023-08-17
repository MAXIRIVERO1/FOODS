const dotenv = require('dotenv')
dotenv.config() // vamos a acceder al objeto PROCESS
const { URL_API, API_KEY } = process.env
const axios = require('axios')
const flag = "&addRecipeInformation=true"

const dietController = async ()=>{
    const dietTypes = [];
    const response = await axios.get(`${URL_API}?apiKey=${API_KEY}${flag}&number=100`)
    for (const prop of response.data.results) {
        if(prop.vegetarian === true){
            if(dietTypes.length < 1)dietTypes.push("vegetarian") 
        }
    }
    const diet = response.data.results.map((recipe)=>recipe.diets)
    if (diet) {
        for (const array of diet) {
            for (const dieta of array) {
                if (!dietTypes.includes(dieta)) {
                    dietTypes.push(dieta);
                }
            }
        }
    }
    console.log(dietTypes)
    if(dietTypes.length) return dietTypes
}


module.exports = {dietController}