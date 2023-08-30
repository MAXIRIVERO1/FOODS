import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"



export const NavBar = ()=>{
    const location = useLocation()
    return(<div className={styles.container} >
        {location.pathname !== "/form" && (<Link to={"/form"}><button className={styles.button} >CREATE</button></Link>)}
        {location.pathname !== "/home" && (<Link to={"/home"}><button className={styles.button} >HOME</button></Link>)}
    </div>)
}