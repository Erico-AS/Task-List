import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TaskApp = () => {
  const [tarefas, setTarefas] = useState([]);
  const [tarefasConcluidas, setTarefasConcluidas] = useState([])
  const [tarefa, setTarefa] = useState('');
  const [mostrarAtivas, setMostrarAtivas] = useState(true);
  const [mostrarConcluidas, setMostrarConcluidas] = useState(false);

  function adicionarTarefa() {
    if (tarefa.trim() !== '') {
      setTarefas([...tarefas, { t: tarefa, estado: true }]);
      setTarefa('');
    }
  }

  function alterarEstadoTarefa(index, elemento) {
    const novaLista = [...tarefas];
    novaLista[index].estado = !novaLista[index].estado;
  
    if (novaLista[index].estado) {
      elemento.classList = 'task';
      const novaListaConcluidas = tarefasConcluidas.filter((_, i) => i !== index);
      setTarefasConcluidas(novaListaConcluidas);
    } else {
      elemento.classList = 'taskConcluida';
      const tarefaMovida = novaLista.splice(index, 1)[0];
      setTarefasConcluidas([...tarefasConcluidas, tarefaMovida]);
    }
  
    setTarefas(novaLista);
  }
  

  function removerTarefa(index) {
    const novaLista = [...tarefas];
    novaLista.splice(index, 1);
    setTarefas(novaLista);
  }

  return (
    <>
      <form>
        <textarea id='tarefa' value={tarefa} onChange={(e) => setTarefa(e.target.value)}></textarea>
        <button type='button' onClick={adicionarTarefa}>+</button>
        <button
          type='button'
          onClick={() => {
            setMostrarAtivas(true);
            setMostrarConcluidas(false);
          }}
        >
          Mostrar Ativas
        </button>
        <Link to='/concluidas'>
          <button
            type='button'
            onClick={() => {
            setMostrarAtivas(false);
            setMostrarConcluidas(true);
          }}
        > Mostrar Concluídas  
        </button>
      </Link>
      
      {mostrarConcluidas && (<Concluidas tarefasConcluidas={tarefasConcluidas} />)}

      </form>

      <main>
        {tarefas.length > 0 &&
        (mostrarAtivas
          ? tarefas.map((task, index) => (
            <div className='task' key={index}>
              {task.t}
              <input type='checkbox' name="radio" className='checkmark' onChange={(e) => alterarEstadoTarefa(index, e.target.parentElement)}></input>
              <button onClick={() => removerTarefa(index)}>
                <DeleteIcon />
              </button>
            </div>
          ))
        : null)}
        {tarefasConcluidas.length > 0 &&
          (mostrarConcluidas
            ? tarefasConcluidas.map((task, index) => (
                <div className='taskConcluida' key={index}>
                  {task.t}
                  <input
                    type='checkbox'
                    name='radio'
                    className='checkmark'
                    onChange={(e) =>
                      alterarEstadoTarefa(index, e.target.parentElement)
                    }
                    checked
                  ></input>
                  <button onClick={() => removerTarefa(index)}>
                    <DeleteIcon />
                  </button>
                </div>
              ))
            : null)}
      </main>
    </>
  );
}

export default TaskApp;

