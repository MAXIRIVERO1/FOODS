import {createRecipe} from "../../Redux/Actions/actions"
import { useState } from "react";
import { useDispatch } from "react-redux";
import {validate} from "./validate"

const Form = ()=>{
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({
        title: "",
        image: "",
        summary: "",
        healthScore: "",
        steps: "",
        diet: "",
    })
    const [recipe, setRecipe] = useState({
        title: "",
        image: "",
        summary: "",
        healthScore: "",
        steps: "",
        diet: [],
      });

const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(createRecipe(recipe))
    alert("Succes")
}
const handleInputChange = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      ...recipe,
      [e.target.name]: e.target.value,
    };
    setRecipe(updatedRecipe);
  };

  const handleDietChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    if(recipe.diet.includes(value)){return}
    else{
      const update = {
        ...recipe,
        diet: [...recipe.diet, value]
      }
      setRecipe(update);
    }
  };
  
    const handleRemoveDiet = (dietToRemove) => {
        const updatedDiets = recipe.diet.filter((diet) => diet !== dietToRemove);
        const updatedRecipe = {
        ...recipe,
        diet: updatedDiets,
        };
        setRecipe(updatedRecipe);
    };

    return <div>
        <h1>Create your recipe</h1>
        <form onSubmit={handleSubmit}>
            <label>Title: <input type="text" name="title" value={recipe.title} onChange={handleInputChange}/></label><br />
            <label>Image: <input type="text" name="image" value={recipe.image} onChange={handleInputChange}/></label><br />
            <label>HealthScore: <input type="number" name="healthScore" value={recipe.healthScore} onChange={handleInputChange}/></label><br />
            <label>Summary: <textarea type="text" name="summary" value={recipe.summary} onChange={handleInputChange}/></label><br />
            <label>Steps: <textarea type="text" name="steps" value={recipe.steps} onChange={handleInputChange}/></label><br />
            <label>Diets: <select name="diet" value={recipe.diet} onChange={handleDietChange}>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten free">Gluten free</option>
            <option value="dairy free">Dairy free</option>
            <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
            <option value="paleolithic">Paleolithic</option>
            <option value="primal">Primal</option>
            <option value="whole 30">Whole 30</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="ketogenic">Ketogenic</option>
            <option value="fodmap friendly">Fodmap friendly</option>    
            </select></label><br />
            <div>
            <ul>
            {recipe.diet.map((diet, index) => (
            <li key={index}>
              <button onClick={() => handleRemoveDiet(diet)}>{diet} X</button>
            </li>
            ))}
            </ul>
            </div>
            <button type="submit">SUBMIT</button>
        </form>
    </div>
}

export default Form;