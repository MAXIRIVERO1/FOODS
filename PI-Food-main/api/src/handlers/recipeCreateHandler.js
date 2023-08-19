
const {createRecipe} = require("../controllers.js/createRecipeController")



const recipeHandler = async(req, res)=>{
    try {
        const {title, image, summary, healthScore, instructions, diet} = req.body;
        if(title){const recipeCreate = await createRecipe({title, image, summary, healthScore, instructions}, diet);
        if(recipeCreate){return res.status(200).json(recipeCreate)}
    } 
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}



module.exports = {recipeHandler}