import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';

const MealDetails = () => {
  const {id} = useParams();
  const {getMeal, meal} = useGlobalContext();
  const {strMeal, strYoutube, strInstructions, strMealThumb} = meal;

  useEffect(() => {
    getMeal(id);
  }, [getMeal, id]);

  const ingredients = []; 
  
  // every meal in API has max 20 ingredients
  for(let i = 1; i < 21; i++) {
    let name = meal[`strIngredient${i}`];
    let mesure = meal[`strMeasure${i}`];

    if(name !== "" && name !== null) {
      ingredients.push({name, mesure});
    }
  }
  
  return (
    <Main>
      <h1>{strMeal}</h1>
      {strYoutube ? <iframe width="100%" height="350" src={`https://www.youtube.com/embed/${strYoutube.slice(32)}`} title={strMeal} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> : <img src={strMealThumb} alt={strMeal} />}
      <div className="ingredients">
        {ingredients.map((ingredient, index) => {
          return <div className="ingredient" key={index}>
            <h2>{ingredient.name}</h2>
            <h3>{ingredient.mesure}</h3>
          </div>
        })}
      </div>
      <p>{strInstructions}</p>
    </Main>
  )
}

const Main = styled.main`
  padding: 50px 0;
  max-width: 1100px;
  margin: 0 auto;
  h1 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
  }
  iframe {
    max-width: 600px;
    margin: 0 auto;
    display: block;
  }
  img {
    max-height: 400px;
    margin: 0 auto;
  }
  p {
    font-size: 19px;
    text-align: center;
    margin-top: 30px;
  }
  .ingredients {
    display: flex;
    margin-top: 30px;
    text-align: center;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    .ingredient {
      min-width: 180px;
      max-width: 300px;
      h2 {
        font-size: 22px;
        font-weight: 500;
        background: #F4F3EE;
        padding: 3px 15px;
      }
      h3 {
        font-size: 20px;
        font-weight: 400;
        padding: 5px 15px 0;
      }
    }
  }
`;

export default MealDetails
