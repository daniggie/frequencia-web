import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';
import { TiPencil } from "react-icons/ti";
import { Title, Repositories, Form, Corpo } from './style';
import { Link } from 'react-router-dom';

interface Aluno {
    id: string,
    nome: string,
}

interface Frequencia {
  status: boolean, 
  idAluno: string,
}

const Home: React.FC = () => {
  const [frequencias, setFrequencia] = useState<Frequencia[]>([]);
  const [alunos, setAlunos] = useState<Aluno[]>(() => {
    return [];
  });

  useEffect(()=>{
    api.get(`alunos/`).then(response => {
      setAlunos(response.data);
    });
    
  }, []);

  const MarcaBox = useCallback  ((id: string, checked: boolean, index: number) => {
    frequencias.push({idAluno: id, status: true});
    setFrequencia(frequencias);  
  
  }, [frequencias]);
  
  
  const Salvar = useCallback (() => {
    frequencias.forEach(async (element, index) => {
    await api.post(`/frequencia`, element).then(()=>console.log("Ok"));
    });
    
    window.document.location.reload();
  }, []);

  return (
<>
    <Corpo>
      <div>
        <Title>Marque a presença dos alunos</Title>

        <Repositories>
        {alunos.map((aluno, index) => (
          <div className='name' key={aluno.nome}>
            <div>
              <p>
                <Link to={`/atualizar/${aluno.id}/${aluno.nome}`}>
                  <TiPencil size={14} color='#000' cursor="pointer"/>
                </Link>
                {aluno.nome}
              </p>

              <input id={`${index}`} type="checkbox" onClick={(props) => MarcaBox(aluno.id, props.currentTarget.checked, index)}></input>
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

          <button onClick={Salvar}>Salvar</button>
        </Form>
      </div>
    </Corpo>
</>
  );

};

export default Home;
