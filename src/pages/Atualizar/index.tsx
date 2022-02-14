import React, { useCallback, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai';
import api from '../../services/api';

import { Corpo, Form, Title } from './style';

interface AlunoParams {
  id: string,
  nome: string;
}

const Atualizar: React.FC = () => {
  const { params } = useRouteMatch<AlunoParams>();
  const history = useHistory();
  const [alunoNome, setAlunoNome] = useState('');
  const Aluno = {
    nome: "",
  };

  const atualizar = useCallback (async ()=>{

      Aluno.nome = alunoNome;
      await api.put(`alunos/editar/${params.nome}`, Aluno).then((response) => {history.push('/')});
    
  },[Aluno, alunoNome]);
  
  return (
    <Corpo>
      <Title>Atualize o nome do aluno: <b>{params.nome}</b></Title>
      <Form> 
        <input onChange={e => setAlunoNome(e.target.value) }  type="text" placeholder="Digite o nome novo do aluno..."/>
        <button onClick={atualizar} type="submit"><AiOutlineCheck size={22}/></button>
      </Form>
    </Corpo>
  );
};
export default Atualizar;
