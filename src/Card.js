import React from 'react';

const Card = ({articleMeals}) => {
    return (
        <div className='meal-card'>
            <h1>{articleMeals.strMeal}</h1>
            <p>Origin: {articleMeals.strArea}</p>
            <img src={articleMeals.strMealThumb} alt={"photo+articleMeals.Meal"}/>
            <p>{articleMeals.strInstructions}</p>
        </div>
    );
};

export default Card;