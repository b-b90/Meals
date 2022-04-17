import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context'

const Categories = () => {
  const {categories} = useGlobalContext();

  return (
    <Main>
      <div className="container">
        <h1>Categories</h1>
        <div className="categories-grid">
          {categories.map((categorie) => {
            const {idCategory, strCategoryThumb, strCategory} = categorie;

            return <Link to={`${strCategory}`} key={idCategory}>
              <img src={strCategoryThumb} alt={strCategory} />
              <h2>{strCategory}</h2>
            </Link>
          })}
        </div>
      </div>
    </Main>
  )
}

const Main = styled.main`
  padding: 50px 0;
  h1 {
    font-size: 35px;
    text-align: center;
    margin-bottom: 40px;
  }
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    img {
      border-radius: 20px;
      transition: all 0.3s ease-in-out;
      margin: 0 auto;
      &:hover {
        transform: scale(1.03);
      }
    }
    h2 {
      font-size: 22px;
      text-align: center;
      margin-top: 10px;
    }
  }
`;

export default Categories
