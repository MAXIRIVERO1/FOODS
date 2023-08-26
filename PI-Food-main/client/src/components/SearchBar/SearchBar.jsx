import styles from "./SearchBar.module.css" 
import {useState} from "react"
// import {useLocation} from "react-router-dom"
import { useDispatch } from "react-redux"
import {onSearch} from "../../Redux/Actions/actions"

export default function SearchBar() {
   const [name, setName] = useState("")
   // const pathname = useLocation()
   const dispatch = useDispatch();
   
   const handleEnter = (event)=>{
      if(event.key === "Enter"){
         dispatch(onSearch(name))
         setName("")
      }
   }

   const handleChange = (event)=>{
      setName(event.target.value)
   }

   const handleSearchClick = () => {
      dispatch(onSearch(name));
      setName("");
    };
   return (
      <div className={styles.container} >
         {
            // !pathname.includes('/detail') &&
            // !pathname.includes('/about') &&
            // !pathname.includes('/favorites') &&
         <div className={styles.containerinput}>
         <input className={styles.input} type='search' placeholder="Find your Recipe by first name..." onChange={handleChange} value={name} onKeyUp={handleEnter}/>
         <button className={styles.button} onClick={()=>{handleSearchClick()} }>GET</button></div>}
      </div>
   );
}