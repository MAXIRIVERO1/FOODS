const {Recipe, Diets} = require("../db")


const createRecipe = async(recipe, diet)=>{
    const recipeCreate = await Recipe.create(recipe);
    const foundDiet = await Diets.findOne({where:{name:diet}})
    await recipeCreate.addDiets(foundDiet);
    return recipeCreate;
}



module.exports = {createRecipe};