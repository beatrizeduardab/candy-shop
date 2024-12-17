import React from 'react';
import { useParams } from 'react-router-dom';
import styled  from 'styled-components';
import { getDoces } from '../servicos/api';

const Container = styled.div`
padding: 2rem;
text-align: center
;`

const Image = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

function DetalhesDoce() {
  const { id } = useParams();
  const [doce, setDoces] = useState(null);

  return (
    <div>
      <h1>Detalhes do Doce</h1>
      <p>ID do Doce: {id}</p>
      {/* Adicione mais detalhes sobre o doce aqui */}
    </div>
  );
}

export default DetalhesDoce;