import React from 'react';
import recipeData from '../../db/dishLists.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function CardList() {
  
  return (
    <div className="card-wrap">
      <div className="card-list">
        {recipeData.recipe.map((item) => (
          <div key={item.id}>
            <div className="top">
              <h2>
                <span>{item.dishName}</span>
                <a href={item.href} target="_blank" title={item.dishName + " 원문 바로가기"}><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
              </h2>
              <img src={'/assets/images/dish/' + item.imgUrl} alt={item.dishName} />
              <div>
                <p>{item.dishBy}</p>
                <p>{item.byType}</p>
              </div>
            </div>
            <div className="detail">
              <ul className='ingredients'>
                {item.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.value}</li>
                ))}
              </ul>
              
              <ol className='sequences'>
                {item.sequences.map((step, index) => (
                  <li key={index}>{step.value}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
