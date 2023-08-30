const {dietController} = require("../controllers.js/dietsController")
const {Diets} = require("../db")

const dietHandler = async (req, res)=>{
    try {
        const existingDiets = await Diets.findAll();
        if(existingDiets.length === 0){const diets = await dietController();
        if(diets.length){await Promise.all(diets.map(async(element)=>{await Diets.create({ name: element })}))}
        if(diets.length) return res.status(200).json(diets)
        else{return res.status(404).send("dosnt exist diets")}
    }
        else{
            const onlyDietNames = existingDiets.map((diet)=>diet.name)
            return res.status(200).json(onlyDietNames)}
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {dietHandler}