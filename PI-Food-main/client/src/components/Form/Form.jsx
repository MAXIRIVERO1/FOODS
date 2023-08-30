import {createRecipe} from "../../Redux/Actions/actions"
import { useState } from "react";
import { useDispatch } from "react-redux";
import {validate} from "./validation";
import styles from "./Form.module.css"

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

    const validationErrors = validate(recipe);

    if (Object.keys(validationErrors).length > 0) {
      return alert("all fields are required");
    }  

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

    const validationErrors = validate(recipe);
    setErrors(validationErrors);

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

    return <div className={styles.container} >
        <h1 className={styles.h1} >Create your recipe</h1><br />
        <div className={styles.form}>
        <form onSubmit={handleSubmit}>
            <label>Title: <input className={styles.input} placeholder="write the name of your recipe" type="text" name="title" value={recipe.title} onChange={handleInputChange}/></label><br />
            {errors.title && <span className={styles.errors}>{errors.title}</span>}<br />
            <label>Image URL: <input placeholder="https://www.example.com/image.jpg" className={styles.input} type="text" name="image" value={recipe.image} onChange={handleInputChange}/></label><br />
            {errors.image && <span className={styles.errors}>{errors.image}</span>}<br />
            <label>HealthScore: <input className={styles.input} placeholder="write a number" type="number" name="healthScore" value={recipe.healthScore} onChange={handleInputChange}/></label><br />
            {errors.healthScore && <span className={styles.errors}>{errors.healthScore}</span>}<br />
            <label>Summary: <textarea className={styles.input} placeholder="tell us about it" type="text" name="summary" value={recipe.summary} onChange={handleInputChange}/></label><br />
            {errors.summary && <span className={styles.errors}>{errors.summary}</span>}<br />
            <label>Steps: <textarea className={styles.input} placeholder="write a few steps" type="text" name="steps" value={recipe.steps} onChange={handleInputChange}/></label><br />
            {errors.steps && <span className={styles.errors}>{errors.steps}</span>}<br />
            <label>Diets: <select className={styles.button} name="diet" value={recipe.diet} onChange={handleDietChange}>
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
            {errors.diet && <span className={styles.errors}>{errors.diet}</span>}<br />
            <div>
            <ul>
            {recipe.diet.map((diet, index) => (
            <li key={index}>
              <button className={styles.button} onClick={() => handleRemoveDiet(diet)}>{diet} X</button>
            </li>
            ))}
            </ul>
            </div>
            <button className={styles.submit} type="submit">Submit</button>
        </form></div>
    </div>
}

export default Form;