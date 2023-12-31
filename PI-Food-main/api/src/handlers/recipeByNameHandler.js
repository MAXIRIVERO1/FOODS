const {recipeByName, getAll} = require("../controllers.js/recipeNameController")


const getRecipeByName = async(req, res)=>{
    try {
        const {name} = req.query;
        if(name){const recipe = await recipeByName(name);
            if(recipe){return res.status(200).json(recipe)}
            else return res.status(404).send("The recipe doesnt exist")
        }
        else{const result = await getAll();
        if(result){return res.status(200).json(result)}
        }

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {getRecipeByName}