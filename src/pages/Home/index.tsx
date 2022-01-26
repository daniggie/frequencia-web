import React, { useState, useEffect, FormEvent } from 'react';
import { BsSearch, BsGeoAlt } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { string } from 'yargs';
import api from '../../services/api';

import { Title, Repositories, Form, Corpo, Error } from './style';

interface Endereco {
    bairro: string,
    cidade: string,
    logradouro: string,
    estado_info: {
      nome: string
    },
    cep: string;
    estado: string
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

    <Corpo>
    <div>
      <Title>Pesquise por CEP</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
        <input value={newEndereco} onChange={e => setNewEndereco(e.target.value)} type="text" placeholder="Digite o CEP a ser procurado..."/>
        <button type="submit"><BsSearch size={15}/></button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>

      {repositories.map(repository => (
        <Link key={repository.cep} to={`/endereco/${repository.cep}`}>
          <BsGeoAlt size={30}/>
          <div>
            <strong>Encontrado: {repository.estado_info.nome} ({repository.estado}) {repository.cep}</strong>
            <p>{repository.cidade} - {repository.bairro} - {repository.logradouro}</p>
          </div>
        </Link>
      ))}
      </Repositories>

    </div>
    </Corpo>
  );
};

export default Dashboard;
