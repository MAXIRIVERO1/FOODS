import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import axios from "axios"

function App() {
  const [recipes, setRecipes] = useState([]);


  async function onSearch(name) {
    try {
      const endpoint = "http://localhost:3001/recipes/?name=" + name;
      const { data } = await axios(endpoint);
      console.log(data)
  
      // Verifica si la receta ya existe en el estado recipes
      const recipeExists = recipes.some((recipe) => recipe.id === data.id);
  
      if (recipeExists) {
        alert('Recipe already found!');
      } else {
        setRecipes((prevRecipes) => [...prevRecipes, data]);
      }
    } catch (error) {
      alert('Intenta con el nombre de una comida');
    }
  }

  return (
    <div className="App">
      <Routes>
      <Route
      path="/"
      element={<LandingPage />}
      />
      <Route
      path="/home"
      element={<Home onSearch={onSearch} recipes={recipes}/>}
      />
    </Routes>
    </div>
  );
}

export default App;
