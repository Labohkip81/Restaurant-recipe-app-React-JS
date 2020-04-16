import React from 'react'


const Recipe = ({label,calories,image, ingredients}) => {
    return(
        <div>
            <h1> {label}</h1>
            <p> {calories} </p>
            <img src={image} alt=""></img>
            <h3>These are the ingredients:</h3>
            <ol>
                {ingredients.map(ingredient =>(

                 <li>{ingredient.text}</li>
                
                ))}

            </ol>


        </div>
    )
}



export default Recipe;