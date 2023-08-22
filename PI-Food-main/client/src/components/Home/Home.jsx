import React, { useState , useEffect} from "react";
import SearchBar from "../SearchBar/SearchBar"
import Cards from "../Cards/Cards";
import axios from "axios";

const Home = ({onSearch})=>{
    
    const [currentPage, setCurrentPage] = useState(1);
    const [recipes, setRecipes] = useState([]);
    const recipesPerPage = 10;

    useEffect(()=>{
        const getAll = async()=>{
            try {
                const {data} = await axios("http://localhost:3001/recipes/")
                setRecipes(data)
                console.log(recipes)
            } catch (error) {
                throw new Error("imposible to update")
            }
        }
        getAll()
    },[])

    const totalPages = Math.ceil(recipes.length / recipesPerPage);
    const startIndex = (currentPage - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    const recipesToShow = recipes.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
    
    return <div>
        <SearchBar onSearch={onSearch}/>
        
        <Cards recipes={recipesToShow} currentPage={currentPage} recipesPerPage={recipesPerPage}></Cards>

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
    </div>
}

export default Home;