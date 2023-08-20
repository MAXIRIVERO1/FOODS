const {recipeById} = require("../controllers.js/recipeByIdController")

const getRecipeById = async(req, res)=>{
    try {
        function removeTags(input) {
            return input.replace(/<\/?[^>]+(>|$)/g, "");
        }
        const {id} = req.params;
        const result = await recipeById(id)
        const {title, image, summary, healthScore, instructions, diets} = result;
        if(!instructions){const recipeWithoutInst = {id, title, image, summary : removeTags(summary), healthScore, diets}; return res.status(200).json(recipeWithoutInst)}
        else{const recipe = {id, title, image, summary : removeTags(summary), healthScore, instructions: removeTags(instructions), diets}
        return res.status(200).json(recipe)}
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
module.exports = {getRecipeById}