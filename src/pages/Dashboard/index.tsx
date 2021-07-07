import React, { useState, FormEvent } from 'react';
import { BsSearch } from 'react-icons/bs';

import { string } from 'yargs';
import api from '../../services/api';

import { Title, Repositories, Form } from './style';

interface Repository {
  atividade_principal: [{
    text: string;
  }],
  nome: string;
  email: string;
  uf: string;
  municipio: string;
  cnpj: string;
}

const Dashboard: React.FC = () => {
  const [newRepo , setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');

  }

  return (
    <>
      <Title>Explore CNPJ na API</Title>

      <Form onSubmit={handleAddRepository}>
        <input value={newRepo} onChange={e => setNewRepo(e.target.value)} type="text" placeholder="Digite seu CNPJ..."/>
        <button type="submit"><BsSearch size={15}/></button>
      </Form>

      <Repositories>

        <a href="teste">
          <div>
            <strong>GOOGLE BRASIL INTERNET LTDA</strong>
            <p>Portais, provedores de conteúdo e outros serviços de informação na internet</p>
            <p>googlebrasil@google.com</p>
            <p>SP - São Paulo - 06.990.590/0001-23</p>
          </div>
        </a>

      </Repositories>


    </>
  );
};

export default Dashboard;
