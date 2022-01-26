import React, { useState, useEffect, FormEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { string } from 'yargs';
import api from '../../services/api';

import { Title, Repositories, Form, Corpo, Error } from './style';

interface Aluno {
    nome: string,
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Aluno[]>(() => {
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

      const response = await api.get<Aluno>(`/aluno`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setInputError('');

  }

  return (

    <Corpo>
    <div>
      <Title>Alunos</Title>

      <Repositories>

      {repositories.map(repository => (
        <Link key={repository.nome} to={`/`}>
          <div>
            <p>{repository.nome}</p>
          </div>
        </Link>
      ))}
      </Repositories>

    </div>
    </Corpo>
  );
};

export default Dashboard;
