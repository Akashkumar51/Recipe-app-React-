import React from 'react'
import "./Recipe.css"

function Recipe(props) {
  console.log(props,"dsdsds");
  return (
    <div className='recipe'>
      <h1>{props.title}</h1>
      <ol>
            {props.ingredients.length > 0 && props.ingredients.map((data,index) => (
                <li key={index}>{data}</li>
            ))}
        </ol>
      <p className='recipe-p'>Calories : {props.calories}</p>
      <img className='recipe-image' src={props.image} alt="" />
    </div> 
  )
}

export default Recipe