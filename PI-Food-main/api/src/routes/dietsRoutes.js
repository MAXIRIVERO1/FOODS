// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const recipe = require("../controllers.js/recipe")
const {dietHandler} = require("../handlers/diethandler")



const routerDiets = require("express").Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
routerDiets.get("/", dietHandler)


module.exports = {routerDiets}