import styles from "./SearchBar.module.css" 
import {useState} from "react"
import { useDispatch } from "react-redux"
import {onSearch} from "../../Redux/Actions/actions"

export default function SearchBar({setCurrentPage}) {
   const [name, setName] = useState("")
   const dispatch = useDispatch();
   
   const handleEnter = (event)=>{
      if(event.key === "Enter"){
         dispatch(onSearch(name))
         setName("")
         setCurrentPage(1)
      }
   }

   const handleChange = (event)=>{
      setName(event.target.value)
   }

   const handleSearchClick = () => {
      dispatch(onSearch(name));
      setName("");
      setCurrentPage(1)
    };
   return (
      <div className={styles.container} >
         <div className={styles.containerinput}>
         <input className={styles.input} type='search' placeholder="Find your Recipe by name..." onChange={handleChange} value={name} onKeyUp={handleEnter}/>
         <button className={styles.button} onClick={()=>{handleSearchClick()} }>GET</button></div>
      </div>
   );
}