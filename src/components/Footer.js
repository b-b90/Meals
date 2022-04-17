import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <p>&copy;2021 All rights reserved</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background: #F4F3EE;
  padding: 20px 0;
  p {
    font-size: 18px;
    text-align: center;
    color: #463F3A;
  }
`;

export default Footer
