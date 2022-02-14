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

let ListaPadrão = [{
  idAluno: "",
	status: false
}];

const Home: React.FC = () => {
  const [frequencias, setFrequencia] = useState<Frequencia[]>([]);
  const [alunos, setAlunos] = useState<Aluno[]>(() => {
    return [];
  });

  window.onload = function resetarArray() {
    for (let i = 0; i < ListaPadrão.length; i ++) {
      ListaPadrão.pop();
    }
  }

  useEffect(()=>{
    api.get<Aluno[]>(`alunos/`).then(response => {
      setAlunos(response.data);
      if (ListaPadrão.length === 1) {
        console.log("CHEGO LISTA GRAÇAS A DEUS");
        ListaPadrão.pop();

        response.data.map(aluno => ListaPadrão.push({
          idAluno: aluno.id,
          status: false,
        }))}
    });
    
  }, []);

  const MarcaBox = useCallback  ((id: string, checked: boolean, index: number) => {
    frequencias.push({idAluno: id, status: true});
    setFrequencia(frequencias);
  
  }, [frequencias]);
  
  
  const Salvar = useCallback (() => {
    console.log(ListaPadrão);
    ListaPadrão.map(async (Lista) => {
      await api.post(`/frequencia`, Lista).then(()=>console.log("Ok"));
    })
    
    
   //window.document.location.reload();
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

              <input id={`${index}`} type="checkbox" onChange={() => {for (let i = 0; i < ListaPadrão.length; i ++) {
                        if (aluno.id === ListaPadrão[i].idAluno) {
                          ListaPadrão[i].status = !ListaPadrão[i].status;

                          return;
                        }
                      }}}></input>
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
