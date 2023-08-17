
const {createRecipe} = require("../controllers.js/createRecipeController")



const recipeHandler = async(req, res)=>{
    try {
        const {name, image, summary, healthScore, steps, diet} = req.body;
        if(name){const recipeCreate = await createRecipe({name, image, summary, healthScore, steps}, diet);
        if(recipeCreate){return res.status(200).json(recipeCreate)}
    } 
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}



module.exports = {recipeHandler}