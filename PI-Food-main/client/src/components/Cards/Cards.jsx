import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css"

const Cards=({recipes})=>{
   return (
      <div className={style.container}>
         {
            recipes.map((recipe, index)=> {
                const {title, image, diets} = recipe[index]
                console.log(title)
               return (
                   <Card 
                key={index}
                title={title}
                image={image}
                diets={diets}
               />
               )
              
            })
         }
      </div>
   )
}
  

export default Cards;