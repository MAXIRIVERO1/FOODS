import styles from "./SearchBar.module.css" 
import {useState} from "react"
// import {useLocation} from "react-router-dom"
// import imagelogo from "../searchbar/rickymort.png"
export default function SearchBar(props) {
   const [name, setName] = useState("")
   // const pathname = useLocation()

   const handleEnter = (event)=>{
      if(event.key === "Enter"){
         props.onSearch(name)
         setName("")
      }
   }

   const handleChange = (event)=>{
      setName(event.target.value)
   }
   return (
      <div className={styles.container} >
         {
            // !pathname.includes('/detail') &&
            // !pathname.includes('/about') &&
            // !pathname.includes('/favorites') &&
         <div className={styles.containerinput}>
         <input className={styles.input} type='search' placeholder="Find your Recipe by first name..." onChange={handleChange} value={name} onKeyUp={handleEnter}/>
         <button className={styles.button} onClick={()=> props.onSearch(name) }>GET</button></div>}
      </div>
   );
}
