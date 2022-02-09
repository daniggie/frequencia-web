import React, {useCallback, useRef, FormEvent} from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FormHandles } from '@unform/core';
import { Corpo, Forms, Title } from './style';
import api from '../../services/api';

const Cadastrar: React.FC = () => {
  const Aluno = {
    nome: "",
  };

  const FormRef = useRef<FormHandles> (null);

  const handleSubmit = useCallback(()=>{
    Aluno.nome = (document.getElementById('nome') as HTMLInputElement).value;
        api.post('aluno/cadastro',Aluno);
        window.document.location.reload();
  },[]);

  return (
    <Corpo>
      <Title>Cadastre o aluno</Title>
      <Forms onSubmit={handleSubmit}  ref={FormRef}>
        <input  type="text" id='nome' placeholder="Digite o nome do aluno a ser cadastrado..."/>
        <button type="submit"><AiOutlinePlus size={22}/></button>
      </Forms>
    </Corpo>
  );
};
export default Cadastrar;
