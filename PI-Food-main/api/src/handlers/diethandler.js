const {dietController} = require("../controllers.js/dietsController")
const {Diets} = require("../db")

const dietHandler = async (req, res)=>{
    try {
        const diets = await dietController();
        const existingDiets = await Diets.findAll();
        if(existingDiets.length === 0){
        if(diets.length){await Promise.all(diets.map(async(element)=>{await Diets.create({ name: element })}))}//promise all recibe el array de promesas await y las carga en la base de datos obteniendolas de diets
        if(diets.length) return res.status(200).json(diets)
        else{return res.status(404).send("dosnt exist diets")}
    }
        else{res.status(404).send("Diets already in the list")}
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {dietHandler}