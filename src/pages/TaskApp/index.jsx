import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles.css';
import { useEffect } from 'react';

const TaskApp = () => {
  const [tarefas, setTarefas] = useState([]);
  const [tarefasConcluidas, setTarefasConcluidas] = useState([])
  const [tarefa, setTarefa] = useState('');

  function adicionarTarefa() {
    if (tarefa.trim() !== '') {
      setTarefas([...tarefas, { t: tarefa, estado: true }]);
      setTarefa('');
    }
  }

  function alterarEstadoTarefa(index, elemento) {
      console.log(tarefas[index].estado)
    if (tarefas[index].estado == false) {
        elemento.classList = 'task'
        tarefas[index].estado = true
        const novaLista = tarefas.slice(index,1)
        console.log(novaLista)
    } else {
        elemento.classList = 'taskConcluida'
        tarefas[index].estado = false
        const novaLista = tarefas.slice(index,1)
        console.log(novaLista)
        setTarefasConcluidas(novaLista);
    }
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
      </form>

      <main>
        {tarefas.length > 0 &&
          tarefas.map((task, index) => (
            <div className='task' key={index}>
              {task.t}
              <input type='checkbox' name="radio" className='checkmark' onChange={(e) => alterarEstadoTarefa(index, e.target.parentElement)}></input>
              <button onClick={() => removerTarefa(index)}>
                <DeleteIcon />
              </button>
            </div>
          ))
        }
      </main>
    </>
  );
}

export default TaskApp;

