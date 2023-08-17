const {recipeByName} = require("../controllers.js/recipeNameController")

// const getRecipeByName = async(req, res)=>{
//     try {
//         const {name} = req.query;
//         const resultado = await recipeByName()
//         const result = resultado.results.find(receta => receta.title[0] === name)
//         console.log(result)
//         if(result)return res.status(200).json(result)
//     } catch (error) {
//         return res.status(500).json({error: error.message})
//     }
// }
const getRecipeByName = async(req, res)=>{
    try {
        const {name} = req.query;
        if(name){const recipe = await recipeByName(name);
            if(recipe.length > 0){return res.status(200).json(recipe)}
            else return res.status(404).send("The recipe doesnt exist")
        }

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {getRecipeByName}