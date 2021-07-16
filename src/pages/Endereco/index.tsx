import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Corpo } from './style';

interface EnderecoParams {
  repository: string;
}

const Endereco: React.FC = () => {
  const { params } = useRouteMatch<EnderecoParams>()

  return (
    <Corpo>
      <h1>Endereco: { params.repository }</h1>
    </Corpo>
  );
};
export default Endereco;
