import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #ff6b6b;
  padding: 1rem;
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
`;


function Header() {
    return (
        <HeaderContainer>
            <h1>Candy Shop</h1>
        </HeaderContainer>
    )
}

export default Header;