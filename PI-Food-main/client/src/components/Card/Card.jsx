import React from "react";
import style from "./Card.module.css"
import {Link} from "react-router-dom"


const Card = ({title, image, diets})=>{
    console.log(title)
    return (<div>
            <Link className={style.link} to={`/detail/${title}`}>
            <h2> {title} </h2>
         </Link>
         <img  src={image} alt={title} className={style.image} />
         <h2>Diets:</h2>
      <ul>
        {diets.map((diet, index) => (
          <li key={index}>{diet}</li>
        ))}
      </ul>
         </div>)
}

export default Card;