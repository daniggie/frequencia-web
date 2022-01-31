import React, { useState, useEffect, FormEvent } from 'react';
import api from '../../services/api';
import { TiPencil } from "react-icons/ti";
import { Title, Repositories, Form, Corpo } from './style';
import { Link } from 'react-router-dom';

interface Aluno {
    id: number,
    nome: string,
}

const Home: React.FC = () => {
  const [alunos, setAlunos] = useState<Aluno[]>(() => {
    return [];
  });

  useEffect(()=>{
    api.get(`alunos/`).then(response => {
      setAlunos(response.data)
    })
  }, []);

  return (
<>
    <Corpo>
      <div>
        <Title>Marque a presença dos alunos</Title>

        <Repositories>
        {alunos.map(aluno => (
          <div className='name'>
            <div>
              <p>
                <Link to={`/atualizar/${aluno.nome}`}>
                  <TiPencil size={14} color='#000' cursor="pointer"/>
                </Link>
                {aluno.nome}
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
