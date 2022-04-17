import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import { useGlobalContext } from '../context/context';
import Meal from '../components/Meal';
import styled from 'styled-components';

const Categorie = () => {
  const {name} = useParams();
  const {categorieMeals, getCategorieMeals} = useGlobalContext();

  useEffect(() => {
    getCategorieMeals(name)
  }, [name, getCategorieMeals])

  return (
    <Main>
      <div className="container">
        <h1>{name}</h1>
        <div className="meals-grid">
          {categorieMeals.map((meal) => {
            return <Meal meal={meal} key={meal.idMeal}></Meal>
          })}
        </div>
      </div>
    </Main>
  )
}

const Main = styled.main`
  padding: 50px 0;
  min-height: calc(100vh - 140px);
  h1 {
    text-align: center;
    font-size: 35px;
    margin-bottom: 40px;
  }
  .meals-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
  @media (max-width: 991px) {
    .meals-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 30px;
    }
    .meals-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }
`;

export default Categorie
