import React from 'react'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import logo from '../images/meals-logo.png'

const Header = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <Wrapper>
          <Link to="/"><img src={logo} alt="home" /></Link>
          <ul>
            <li><NavLink to="/" className={(data) => data.isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="categories/" className={(data) => data.isActive ? 'active' : ''}>Meals Categories</NavLink></li>
          </ul>
        </Wrapper>
      </div>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`background: #F4F3EE;`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  img {
    max-width: 50px;
  }
  ul {
    list-style-type: none;
    display: flex;
    li {
      font-size: 20px;
      text-transform: uppercase;
      +li {
        margin-left: 30px;
      }
      a {
        padding-bottom: 10px;
        position: relative;
        color: #463F3A;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 4px;
          width: 0;
          background: #78C091;
          transition: all 0.3s ease-in-out;
        }
        &:hover {
          &::before {
            width: 100%;
          }
        }
      }
      .active {
        &::before {
          width: 100%;
        }
      }
    }
  }
`;

export default Header
