import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, recipeURL}) =>{
    return(
        <div className = {style.recipe}>
            <div className= {style.container}>
                <a href = {recipeURL} target = "_blank"><h1>{title}</h1></a>
                <div className = {style.card}>
                    <div className = {style.info}>
                        <div className = {style.front}>
                            <img className = {style.image} src={image} alt = "delicious plate of food"/>
                            <p>Calories: {Math.floor(calories)}</p>
                        </div>
                        <div className = {style.back}>
                            <ol>
                                {ingredients.map(ingredient =>(
                                    <li>{ingredient.text}</li>
                                ))}
                            </ol>
                            <a href = {recipeURL} target = "_blank">
                                <p>Find the {title} recipe here</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Recipe;