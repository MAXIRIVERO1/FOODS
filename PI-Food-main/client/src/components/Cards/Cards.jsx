import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css"

const Cards=({recipes})=>{
   return (
      <div className={style.container}>
         {
               recipes.map((recipe, index)=> {
                const {id,title, image, diets, healthScore} = recipe
                console.log(title)
               return (
                   <Card 
                key={index}
                id={id}
                title={title}
                image={image}
                diets={diets}
                healthScore={healthScore}
               />
               )
              
            })
         }
      </div>
   )
}
  

export default Cards;