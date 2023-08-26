import React, { useState , useEffect} from "react";
import SearchBar from "../SearchBar/SearchBar"
import Cards from "../Cards/Cards";
import {onSearch, getAll, descendiente, ascendente, filterByDiet, getDiets, byFont, healthScore} from "../../Redux/Actions/actions"
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";

const Home = ()=>{
    
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const recipes = useSelector((state)=>state.recipes)
    const recipesPerPage = 10;



    useEffect(()=>{
      dispatch(getAll())
      dispatch(getDiets())
      console.log("despachando diets")
    },[])

    const ascHandler = ()=>{
      dispatch(ascendente())
    }
    const desHandler = ()=>{
      dispatch(descendiente
        ())
    }
    const resetHandler = ()=>{
      dispatch(getAll())
    }
    const dietChangeHandler = (event) => {
      const selectedValue = event.target.value;
          dispatch(filterByDiet(selectedValue));
    };
    const fontHandler = (event)=>{
      const selectedFont = event.target.value;
          dispatch(byFont(selectedFont))
    }
    const healthHandler = (event)=>{
      const selected = event.target.value;
      dispatch(healthScore(selected))
    }

    const totalPages = Math.ceil(recipes.length / recipesPerPage);


    const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
    return <div>
        <SearchBar onSearch={onSearch}/>
        <Link to={"/form"}><button>CREATE</button></Link>
        <button onClick={()=>{ascHandler()}}>ASC</button>
        <button onClick={()=>{resetHandler()}}>RESET</button>
        <button onClick={()=>{desHandler()}}>DES</button>
        <select onChange={dietChangeHandler}>
          <option value="all">FILTERDIET</option>
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
        </select>
        <select onChange={fontHandler}>
          <option value="all">FONT</option>
          <option value="mis recetas">Mis resetas</option>
          <option value="originales">Originales</option>
        </select>
        <select onChange={healthHandler}>
        <option value="">HealthScore</option>
          <option value="ascendente">+HealthScore</option>
          <option value="descendente">-HealthScore</option>
        </select>
        

        <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
        </button>
        ))}
        </div>
        <Cards recipes={recipes.slice(
      (currentPage - 1) * recipesPerPage,
      currentPage * recipesPerPage
    )}></Cards>
    </div>
}

export default Home;

