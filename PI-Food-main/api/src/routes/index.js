const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const recipe = require("../controllers.js/recipe")
const {getRecipeById} = require("../handlers/recipehandler")
const {getRecipeByName} = require("../handlers/recipeByNameHandler")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/:id", getRecipeById)
router.use("/", getRecipeByName)

module.exports = router;
