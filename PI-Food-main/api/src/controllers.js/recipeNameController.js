const dotenv = require('dotenv')
dotenv.config() // vamos a acceder al objeto PROCESS
const { URL_API, API_KEY } = process.env
const axios = require('axios')
const flag = "&addRecipeInformation=true"
const {Recipe, Diets} = require("../db")


const recipeByName = async(name)=>{
   const response = await axios.get(`${URL_API}?apiKey=${API_KEY}${flag}&number=100`)
   const recipe = response.data.results.filter((recipe)=> recipe.title.toLowerCase().split(" ")[0] === name.toLowerCase().split(" ")[0])
   console.log(recipe)
   if(!recipe.length){
      const responseDB = await Recipe.findOne({
         where:{title : name},
         include:[{model :Diets, attributes: ["name"], through: {attributes: []}}]
         })
         if(!responseDB){throw new Error("Dosnt exist in the database")}
         console.log(responseDB)
         const arreglo = responseDB.diets.map((e)=>e.name)
         const resultad = {...responseDB.toJSON(), diets: arreglo}
         const resultado = []
         resultado.push(resultad)
         console.log(resultado)
         return resultado;
   }

   const destructuring = recipe.map(({id, title, image, diets, vegetarian, healthScore})=>{
      if(vegetarian)diets.push("vegetarian")
      return {id, title, image, diets, healthScore}})
   
   
   if(destructuring){ return destructuring }

};



const getAll = async()=>{
   const response = await axios.get(`${URL_API}?apiKey=${API_KEY}${flag}&number=100`);
   const result = response.data.results
   const responseDB = await Recipe.findAll({
      include:[{model :Diets, attributes: ["name"], through: {attributes: []}}]
      })
      console.log(responseDB)
      const dbRecipesWithDiets = responseDB.map(recipe => {
         const dietsArray = recipe.diets.map(diet => diet.name);
         return {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            healthScore: recipe.healthScore,
            diets: dietsArray
         };
      });

      const arrayApi = result.map(({id, title, image, diets, vegetarian, healthScore})=>{
         if(vegetarian)diets.push("vegetarian")
         return {id, title, image, diets, healthScore}})

   const arrayRecipes = [...dbRecipesWithDiets, ...arrayApi]
   if(arrayRecipes){return arrayRecipes}
}

module.exports = {recipeByName, getAll}