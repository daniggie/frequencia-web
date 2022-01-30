import React, { useState, useEffect, FormEvent } from 'react';
import { string } from 'yargs';
import api from '../../services/api';
import { TiPencil } from "react-icons/ti";

import { Title, Repositories, Form, Corpo, Error } from './style';
import { config } from 'process';

interface Aluno {
    nome: string,
}

const Home: React.FC = () => {
  const [alunos, setAlunos] = useState<Aluno[]>(() => {
    return [];
  });

  async function listaAlunos(): Promise<void> {
    await api.get(`alunos/`).then(response => {
      setAlunos(response.data)
    })
  }

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
  }

  listaAlunos();

  console.log(alunos);


  return (
<>
    <Corpo>
      <div>
        <Title>Marque a presença dos alunos</Title>

        <Repositories>
        {alunos.map(alunos => (
          <div className='name'>
            <div>
              <p>
                <a href="/atualizar">
                  <TiPencil size={14} color='#000' cursor="pointer"/>
                </a>
                {alunos.nome}
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

export default Home;
