const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const recipe = require("../controllers.js/recipe")
const {routerRecipes} = require("./recipeRoutes")
const {routerDiets} = require("./dietsRoutes")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", routerRecipes)
router.use("/diets", routerDiets)


module.exports = router;
