const {recipeById} = require("../controllers.js/recipeByIdController")


const getRecipeById = async(req, res)=>{
    try {
        const {id} = req.params;
        const result = await recipeById(id)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


module.exports = {getRecipeById}