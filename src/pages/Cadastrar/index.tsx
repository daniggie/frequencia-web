import React, {useCallback, useRef, FormEvent, useState} from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FormHandles } from '@unform/core';
import { Corpo, Forms, Title } from './style';
import api from '../../services/api';

const Cadastrar: React.FC = () => {
  const [alunoNome, setAlunoNome] = useState('');
  const Aluno = {
    nome: "",
  };

  const FormRef = useRef<FormHandles> (null);

  const handleSubmit = useCallback( async (event: FormEvent<HTMLFormElement>)=>{
    try {
      Aluno.nome = alunoNome;
      console.log(alunoNome)
        await api.post('alunos',Aluno);
        window.document.location.reload();
    } catch (error) {
      console.log(error);
    }
    
  },[Aluno, alunoNome]);


  return (
    <Corpo>
      <Title>Cadastre o aluno</Title>
      <Forms onSubmit={handleSubmit}  ref={FormRef}>
        <input onChange={e => setAlunoNome(e.target.value) } type="text" id='nome' placeholder="Digite o nome do aluno a ser cadastrado..."/>
        <button type="submit"><AiOutlinePlus size={22}/></button>
      </Forms>
    </Corpo>
  );
};
export default Cadastrar;
