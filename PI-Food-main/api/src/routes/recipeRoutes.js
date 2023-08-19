// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const recipe = require("../controllers.js/recipe")
const {getRecipeById} = require("../handlers/recipeByIdHandler")
const {getRecipeByName} = require("../handlers/recipeByNameHandler")
const {recipeHandler} = require("../handlers/recipeCreateHandler")


const routerRecipes = require("express").Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
routerRecipes.get("/:id", getRecipeById)
routerRecipes.get("/", getRecipeByName)
routerRecipes.post("/", recipeHandler)


module.exports = {routerRecipes}