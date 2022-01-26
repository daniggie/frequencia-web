import React, { useState, useEffect, FormEvent } from 'react';
import { string } from 'yargs';
import api from '../../services/api';
import { TiPencil } from "react-icons/ti";

import { Title, Repositories, Form, Corpo, Error } from './style';

interface Endereco {
    cidade: string,
    cep: string;
}

const Dashboard: React.FC = () => {
  const [newEndereco , setNewEndereco] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Endereco[]>(() => {
    const storageEndereco = localStorage.getItem(
      '@EnderecoExplorer:repositories',
    );

    if(storageEndereco){
      return JSON.parse(storageEndereco);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@EnderecoExplorer:repositories',
      JSON.stringify(repositories)

      );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if(!newEndereco){
      setInputError("Campo de busca encontra-se vázio!");
      return;
    }

    try{

      const response = await api.get<Endereco>(`cep/${newEndereco}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewEndereco('');
      setInputError('');

    } catch(err){
      setInputError("Endereço não encontrado/inexistente");
    }

  }

  return (
<>
    <Corpo>
      <div>
        <Title>Marque a presença dos alunos</Title>

        <Repositories>
        {repositories.map(repository => (
          <div className='name'>
            <div>              
              <p> 
                <a href="/atualizar">
                  <TiPencil size={14} color='#000' cursor="pointer"/>
                </a>
                
                {repository.cidade}
              </p>

              <input type="checkbox"></input>
            </div>
          </div>
        ))}
        </Repositories>
        <Form>
          <button>
            <a href="/cadastrar">
              + Alunos
            </a>
          </button>
          
          <button>Salvar</button>
        </Form>
      </div>
    </Corpo>
</>
  );
  
};

export default Dashboard;
