
import { useState } from "react";


const Form = ()=>{
    const [recipe, setRecipe] = useState({
        title: "",
        image: "",
        summary: "",
        healthScore: "",
        steps: "",
        diet: [],
      });

const handleSubmit=(e)=>{
    e.preventDefault()
}
const handleInputChange = (e) => {
    const updatedRecipe = {
      ...recipe,
      [e.target.name]: e.target.value,
    };
    setRecipe(updatedRecipe);
  };

  const handleDietChange = (e) => {
    const selectedOptions = e.target.options;
    const selectedDiets = [];
  
    for (let i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i].selected) {
        selectedDiets.push(selectedOptions[i].value);
      }
    }
  
    const updatedRecipe = {
      ...recipe,
      diet: selectedDiets,
    };
    setRecipe(updatedRecipe);
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
            <h2>Selected Diets:</h2>
            <ul>
            {recipe.diet.map((diet, index) => (
            <li key={index}>
              <button onClick={() => handleRemoveDiet(diet)}>{diet}x</button>
            </li>
            ))}
            </ul>
            </div>
        </form>
    </div>
}

export default Form;