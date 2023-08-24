import React, { useState , useEffect} from "react";
import SearchBar from "../SearchBar/SearchBar"
import Cards from "../Cards/Cards";
import {onSearch, getAll} from "../../Redux/Actions/actions"
import {useDispatch, useSelector} from "react-redux"

const Home = ()=>{
    
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const recipes = useSelector((state)=>state.recipes)
    const recipesPerPage = 10;



    useEffect(()=>{
      dispatch(getAll())
    },[])

    const totalPages = Math.ceil(recipes.length / recipesPerPage);


    const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
    return <div>
        <SearchBar onSearch={onSearch}/>
        

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

