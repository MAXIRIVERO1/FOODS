const {dietController} = require("../controllers.js/diets")
const {Diets} = require("../db")

const dietHandler = async (req, res)=>{
    try {
        const diets = await dietController()
        if(diets.length){await Promise.all(diets.map(async(element)=>{await Diets.create({ name: element })}))}
        if(diets.length) return res.status(200).json(diets)
        else return res.status(404).send("dosnt exist diets")
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {dietHandler}