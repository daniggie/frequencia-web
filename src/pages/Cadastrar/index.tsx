import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

import { Corpo, Form, Title } from './style';

interface EnderecoParams {
  repository: string;
}

const Cadastrar: React.FC = () => {
  return (
    <Corpo>
      <Title>Cadastre o aluno</Title>
      <Form>
        <input value="" type="text" placeholder="Digite o nome do aluno a ser cadastrado..."/>
        <button type="submit"><AiOutlinePlus size={22}/></button>
      </Form>
    </Corpo>
  );
};
export default Cadastrar;
