const {Recipe, Diets} = require("../db")


const createRecipe = async(recipe, diet)=>{
    const recipeCreate = await Recipe.create(recipe);
    const foundDiet = await Diets.findAll({where:{name:diet}})
    await recipeCreate.addDiets(foundDiet);
    const addAtribute = await Recipe.findOne({
        where: {id: recipeCreate.id},
        include:[{model :Diets, attributes: ["name"], through: {attributes: []}}]
    })
    const arreglo = addAtribute.diets.map((e)=>e.name)
    const resultado = {...addAtribute.toJSON(), diets: arreglo}
    return resultado;
    
}



module.exports = {createRecipe};