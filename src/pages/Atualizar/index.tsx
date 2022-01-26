import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai';

import { Corpo, Form, Title } from './style';

interface EnderecoParams {
  repository: string;
}

const Atualizar: React.FC = () => {
  return (
    <Corpo>
      <Title>Atualize o nome do aluno</Title>
      <Form>
        <input value="Nome do Aluno" type="text" placeholder="Digite o nome do aluno a ser cadastrado..."/>
        <button type="submit"><AiOutlineCheck size={22}/></button>
      </Form>
    </Corpo>
  );
};
export default Atualizar;
