import React, {useEffect, useState} from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import Header from '../components/Header';
import { getDoces } from '../servicos/api';
import Card from '../components/Card';

const Container = styled.div`
padding: 2rem;
text-align: center;
`
const DocesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;



function Home (){

const [doces, setDoces] = useState([]);
const [carrinho, setCarrinho] = useState([]);

useEffect(() => {
    const fetchDoces = async () => {
      try {
        const data = await getDoces();
        setDoces(data);
      } catch (error) {
        console.error('Erro ao buscar os doces:', error);
      }
    };
    fetchDoces();
  }, []);
/*
useEffect(() =>{

    async function fetchDoces(){
        const data = await getDoces ();
        setDoces(data);
    }
    fetchDoces();
}, []);
*/
const adicionarAoCarrinho = (doce) => {
    setCarrinho([...carrinho, doce]);
  };

    return (
        <div>
        <Header/>
            <Container>
            <h1>Nossos Doces</h1>
            <DocesContainer>
                {doces.map((doce) => (
                    <div>
                    <Card
                    id={doce.id}
                    title={doce.title}
                    description={doce.body}
                    image={`https://source.unsplash.com/200x120/?candy,sweets&sig=${doce.id}`}
                    price={(Math.random() * 10 + 1).toFixed(2)}
                    onAddToCart={() => adicionarAoCarrinho(doce)} 
                  />
                  
                  </div>
                ))}
         </DocesContainer>
         <h3>Carrinho de Compras ({carrinho.length} itens)</h3>
        <ul>
          {carrinho.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
          </Container>
      </div>
    );
}
export default Home;