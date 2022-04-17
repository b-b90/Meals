import React from 'react'
import { useGlobalContext } from '../context/context';
import Meal from '../components/Meal';
import styled from 'styled-components';

const Home = () => {
  const {randomMeal, searchTerm, setSearchTerm, meals, fetchMeals, error} = useGlobalContext();

  return (
    <Main>
      <div className="container">
        <Section>
          <h1>Do you like our recommendation?</h1>
          <div className="random-meal">
            <Meal meal={randomMeal}></Meal>
          </div>
        </Section>
        <Section>
          <h2>Or you can search</h2>
          <form onSubmit={fetchMeals}>
            <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
            <button type="submit">search</button>
          </form>
          <div className="meals">
            {error && <p>{error}</p>}
            {meals == null ? '' : 
              <div className="meals-grid">
                {meals.map((meal)=>{
                  return <Meal meal={meal} key={meal.idMeal}></Meal>
                })}
              </div>
            }
          </div>
        </Section>
      </div>
    </Main>
  )
}

const Main = styled.main`min-height: calc(100vh - 140px);`;

const Section = styled.section`
  padding: 50px 0;
  h1 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 35px;
    color: #463F3A;
  }
  .random-meal {
    max-width: 350px;
    margin: 0 auto;
  }
  h2 {
    text-align: center;
    font-size: 26px;
    margin-bottom: 30px;
    color: #463F3A;
  }
  form {
    margin: 0 auto;
    width: 400px;
    max-width: 100%;
    display: flex;
    justify-content: center;

    input {
      border: 0;
      outline: none;
      background: #F4F3EE;
      padding: 15px;
      font-size: 16px;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      color: #463F3A;
      letter-spacing: 1px;
    }
    button {
      background: #463F3A;
      color: #fff;
      letter-spacing: 1px;
      text-transform: uppercase;
      border: 0;
      padding: 15px;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      cursor: pointer;
      font-weight: 600;
    }
  }
  .meals {
    padding-top: 30px;
    p {
      font-size: 20px;
      color: #463F3A;
      text-align: center;
    }
    .meals-grid {
      padding-top: 30px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }
  }

  @media (max-width: 991px) {
    padding: 40px 0;
    .meals {
      .meals-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .random-meal {
      max-width: 280px;
    }
    h1 {
      font-size: 26px;
    }
    h3 {
      font-size: 18px;
    }
  }
  @media (max-width: 767px) {
    .meals {
      .meals-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
    }
  }
  @media (max-width: 575px) {
    h1, h2 {
      font-size: 24px;
    }
    .random-meal {
      max-width: 250px;
    }
    .meals {
      p {
        font-size: 18px;
      }
    }
  }
`;

export default Home
