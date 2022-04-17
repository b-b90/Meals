import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper>
      <div className="text">
        <h1>404</h1>
        <h2>This page doesn't exist</h2>
        <Link to="/">Back home</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #86BBBD;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 50px 15px;
  h1 {
    font-size: 50px;
    font-weight: 700;
  }
  h2 {
    font-size: 28px;
  }
  a {
    display: inline-block;
    padding: 10px 25px;
    background: #fff;
    border-radius: 20px;
    margin-top: 20px;
  }
`;

export default Error
