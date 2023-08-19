const dotenv = require('dotenv')
dotenv.config() // vamos a acceder al objeto PROCESS
const { API_KEY } = process.env
const axios = require('axios')
const {Recipe, Diets} = require("../db")
const uuidValidate = require("uuid-validate")

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



// const recipeById = async (id)=>{
//     try {
//         const foundDB = await Recipe.findByPk(id)
//         if(foundDB) return foundDB
//         const {data} = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
//         if(data) return data;
//     } catch (error) {
//         throw new Error("Recipe dosnt exist")
//     }
// }


// const recipeById = async (id) => {
//     let recipeData = null;

//     try {
//         const { data } = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
//         if (data) {
//             recipeData = data;
//         }
//     } catch (apiError) {
//         console.log("Didnt found in the api web")
//     }

//     try {
//         if (!recipeData) {
//             const foundDB = await Recipe.findByPk(id);
//             if (foundDB) {
//                 // return foundDB;
//                 console.log("entrando a la base");
//                 const addDiet = await Recipe.findOne({
//                     where: {id: foundDB.id},
//                     include:[{model :Diets, attributes: ["name"], through: {attributes: []}}]
//                 })
//                 console.log(addDiet);
//                 const arreglo = addDiet.diets.map((e)=>e.name)
//                 const resultado = {...addDiet.toJSON(), diets: arreglo}
//                 return resultado;
//             }
//         } else {
//             return recipeData;
//         }
//     } catch (dbError) {
//         throw new Error("Error searching in the database");
//     }

//     throw new Error("Recipe not found");
// };


const recipeById = async(id) =>{
    try {
        if(uuidValidate(id)){
        const foundDB = await Recipe.findByPk(id)
        if(!foundDB){throw new Error("Didnt found in the DB")}
        const addDiet = await Recipe.findOne({
        where:{id: foundDB.id},
        include:[{model :Diets, attributes: ["name"], through: {attributes: []}}]
        })
        const arreglo = addDiet.diets.map((e)=>e.name)
        const resultado = {...addDiet.toJSON(), diets: arreglo}
        return resultado;
    }else{
        const { data } = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        if (data) {
            return data;
        }
    }
    } catch (error) {
        throw new Error("The id dosnt exist")
    }
}


module.exports = {recipeById}