import React, { useState , useEffect} from "react";
import SearchBar from "../SearchBar/SearchBar"
import Cards from "../Cards/Cards";
import {onSearch, getAll, descendiente, ascendente, filterByDiet, getDiets, byFont, healthScore} from "../../Redux/Actions/actions"
import {useDispatch, useSelector} from "react-redux";
import styles from "./Home.module.css"

const Home = ()=>{
    
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const recipes = useSelector((state)=>state.recipes)
    
    const recipesPerPage = 9;
    
    

    useEffect(()=>{
      dispatch(getAll())
      dispatch(getDiets())
      console.log("despachando diets")
    },[dispatch])

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
          setCurrentPage(1);
    };
    const fontHandler = (event)=>{
      const selectedFont = event.target.value;
          dispatch(byFont(selectedFont))
          setCurrentPage(1);
    }
    const healthHandler = (event)=>{
      const selected = event.target.value;
      dispatch(healthScore(selected))
    }

    const totalPages = Math.ceil(recipes.length / recipesPerPage);


    const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

    const handleDirection=(e)=>{
      const value = e.target.value;
      if(currentPage < totalPages && value === "next"){setCurrentPage(currentPage+1)}
      if(currentPage > 1 && value === "back"){setCurrentPage(currentPage-1)}
    }
    return <div className={styles.home}>
        <SearchBar onSearch={onSearch} setCurrentPage={setCurrentPage} />

        <button className={styles.button} onClick={()=>{resetHandler()}}>RESET</button>

        <select className={styles.button} onChange={dietChangeHandler}>
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
        <select className={styles.button} onChange={fontHandler}>
          <option value="all">FONT</option>
          <option value="mis recetas">Mis resetas</option>
          <option value="originales">Originales</option>
        </select>
        <select className={styles.button} onChange={healthHandler}>
        <option value="all">HealthScore</option>
          <option value="descendente">+HealthScore</option>
          <option value="ascendente">-HealthScore</option>
        </select>
        <button className={styles.button} onClick={()=>{ascHandler()}}>ASC</button>
        <button className={styles.button} onClick={()=>{desHandler()}}>DES</button>
        

        <div className="pagination">
        <button className={styles.button} onClick={handleDirection} value="back">BACK</button>
        {Array.from({ length: totalPages }).map((_, index) => (
      <button
        key={index}
        onClick={() => handlePageChange(index + 1)}
        className={currentPage === index + 1 ? styles.active : styles.button}
      >
        {index + 1}
      </button>
        ))}
        <button className={styles.button} onClick={handleDirection} value="next" >NEXT</button>
        </div>
        <Cards recipes={recipes.slice(
      (currentPage - 1) * recipesPerPage,
      currentPage * recipesPerPage
    )}></Cards>
    </div>
}

export default Home;

