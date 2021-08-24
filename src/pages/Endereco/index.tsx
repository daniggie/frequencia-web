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
      <a href="https://www.google.com/maps/@-26.5121247,-49.1180915,13z"><p> Informations </p></a>

    </Corpo>
  );
};
export default Endereco;
