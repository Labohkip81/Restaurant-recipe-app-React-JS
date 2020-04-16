import React from 'react'
import {Card} from 'antd';

const Recipe = ({label,calories,image, ingredients}) => {
    return(
        <div>

            <Card title={label} style={{ width: 400}} cover={<img alt={label} src={image} />}>
            <p> {calories} </p>
            <h3>These are the ingredients:</h3>
            <ol>
                {ingredients.map(ingredient =>(

                 <li>{ingredient.text}</li>
                
                ))}

            </ol>




            </Card>
            
           

        </div>
    )
}



export default Recipe;