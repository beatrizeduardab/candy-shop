import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 200px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: #fff;
`;

const CardImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0.5rem 0;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const CardPrice = styled.p`
  font-weight: bold;
  color: #e63946;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

const AddToCartButton = styled.button`
  background-color: #e63946;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #d62828;
  }
`;

function Card({ id, title, description, price, image, onAddToCart }) {
    return (
      <CardContainer>
        <CardImage src={image} alt={title} />
  
        <StyledLink to={`/detalhes/${id}`}>
          <CardTitle>{title}</CardTitle>
        </StyledLink>
  
        <CardDescription>{description}</CardDescription>
        <CardPrice>R$ {price}</CardPrice>
  
        {/* Botão com a função onClick */}
        <AddToCartButton onClick={(e) => {
            e.stopPropagation(); // Evita conflitos
            onAddToCart(); // Chama a função
          }}>
          Adicionar ao Carrinho
        </AddToCartButton>
      </CardContainer>
    );
  }

  export default Card;