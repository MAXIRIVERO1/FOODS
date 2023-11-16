import React from "react";
import style from "./Card.module.css"
import {Link} from "react-router-dom"



const Card = ({id, title, image, diets, healthScore})=>{
    

    console.log(title)
    return (<div className={style.card}>
            <Link className={style.link} to={`/detail/${id}`}>
            <h2> {title} </h2>
         </Link>
         <img  src={image} alt={title} className={style.image} />
         <h2>HealthScore: {healthScore}</h2>
         <h2>Diets:</h2>
      <ul>
        {diets.map((diet, index) => (
          <li key={index}>{diet}</li>
        ))}
      </ul>
         </div>)
}

export default Card;