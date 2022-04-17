import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Meal = ({meal}) => {
  const {strMeal, strMealThumb, idMeal} = meal;

  return (
    <Div>
      <Link to={`/meal/${idMeal}`}>
        <img src={strMealThumb} alt={strMeal} />
        <h3>{strMeal}</h3>
      </Link>
    </Div>
  )
}

const Div = styled.div`
  text-align: center;
  img {
    border-radius: 20px;
    box-shadow: 0px 0px 10px #ccc;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.03) rotate(1.5deg);
    }
  }
  h3 {
    margin-top: 10px;
    font-size: 20px;
    color: #463F3A;
  }
`;

export default Meal
