import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"



export const NavBar = ()=>{
    const location = useLocation()
    return(<div>
        {location.pathname !== "/form" && (<Link to={"/form"}><button>CREATE</button></Link>)}
        {location.pathname !== "/home" && (<Link to={"/home"}><button>HOME</button></Link>)}
    </div>)
}