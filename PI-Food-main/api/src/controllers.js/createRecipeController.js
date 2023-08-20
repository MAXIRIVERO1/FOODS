const {Recipe, Diets} = require("../db")


const createRecipe = async(recipe, diet)=>{
    const recipeCreate = await Recipe.create(recipe);
    const foundDiet = await Diets.findAll({where:{name:diet}})
    await recipeCreate.addDiets(foundDiet);
    const addAtribute = await Recipe.findOne({
        where: {id: recipeCreate.id},//busca la receta creada en la base de datos
        include:[{model :Diets, attributes: ["name"], through: {attributes: []}}]//selecciona el modelo Diets con su atributo name y lo incluye como un array de obj para devolverlo en la peticion
    })
    const arreglo = addAtribute.diets.map((e)=>e.name)
    const resultado = {...addAtribute.toJSON(), diets: arreglo}
    return resultado;
    
}



module.exports = {createRecipe};