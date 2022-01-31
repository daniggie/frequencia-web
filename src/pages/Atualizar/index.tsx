import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai';

import { Corpo, Form, Title } from './style';

interface AlunoNome {
  nome: string;
}

const Atualizar: React.FC = () => {
  const { params } = useRouteMatch<AlunoNome>()
  useEffect(()=>{
    console.log(params.nome);
  },[]);
  return (
    <Corpo>
      <Title>Atualize o nome do aluno: <b>{params.nome}</b></Title>
      <Form>
        <input value="" type="text" placeholder="Digite o nome novo do aluno..."/>
        <button type="submit"><AiOutlineCheck size={22}/></button>
      </Form>
    </Corpo>
  );
};
export default Atualizar;
