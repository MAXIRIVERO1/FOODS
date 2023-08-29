const dotenv = require('dotenv')
dotenv.config() // vamos a acceder al objeto PROCESS
const { API_KEY } = process.env
const axios = require('axios')
const {Recipe, Diets} = require("../db")
const uuidValidate = require("uuid-validate")


// const recipeById = async(id) =>{
//     try {
//         if(uuidValidate(id)){
//         const foundDB = await Recipe.findByPk(id)
//         if(!foundDB){throw new Error("Didnt found in the DB")}
//         const addDiet = await Recipe.findOne({
//         where:{id: foundDB.id},
//         include:[{model :Diets, attributes: ["name"], through: {attributes: []}}]//incluye los name de las dietas asociadas para que json.diets incluya un array de objetos name:diet 
//         })
//         const arreglo = addDiet.diets.map((e)=>e.name)
//         const resultado = {...addDiet.toJSON(), diets: arreglo}
//         return resultado;
//     }else{
//         const { data } = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
//         if (data) {
//             return data;
//         }
//     }
//     } catch (error) {
//         throw new Error("The id dosnt exist")
//     }
// }



const recipeById = async(id) =>{
    function removeTags(input) {
        return input.replace(/<\/?[^>]+(>|$)/g, "");
    }
        if(uuidValidate(id)){
        const foundDB = await Recipe.findByPk(id)
        if(!foundDB){throw new Error("Didnt found in the DB")}
        const addDiet = await Recipe.findOne({
        where:{id: foundDB.id},
        include:[{model :Diets, attributes: ["name"], through: {attributes: []}}]//incluye los name de las dietas asociadas para que json.diets incluya un array de objetos name:diet 
        })
        const arreglo = addDiet.diets.map((e)=>e.name)
        const resultado = {...addDiet.toJSON(), diets: arreglo}
        return resultado;
    }else{
        const { data } = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        const {title, image, summary, healthScore, analyzedInstructions , diets} = data;
        const steps = analyzedInstructions[0].steps.map((stepobj)=>stepobj.step)
        if(!analyzedInstructions){const recipeWithoutInst = {id, title, image, summary : removeTags(summary), healthScore, diets}; return recipeWithoutInst}
        else{const recipe = {id, title, image, summary : removeTags(summary), healthScore, steps: steps.join(" "), diets}
        if (recipe) {
            return recipe;
        }
    }
}};
module.exports = {recipeById}