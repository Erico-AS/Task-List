import { useState } from 'react';
import './styles.css';
import TaskList from '../../compontents/TaskList';
import Concluidas from '../Concluidas';
import { Link } from 'react-router-dom';

const TaskApp = () => {
  const [tarefas, setTarefas] = useState([]);
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);
  const [tarefa, setTarefa] = useState('');

  const [mostrarAtivas, setMostrarAtivas] = useState(true);
  const [mostrarConcluidas, setMostrarConcluidas] = useState(false);

  function adicionarTarefa() {
    if (tarefa.trim() !== '') {
      setTarefas([...tarefas, { t: tarefa, estado: true }]);
      setTarefa('');
    }
  }

  function alterarEstadoTarefa(num) {
    const novaLista = [...tarefas]
    novaLista[num].estado = !novaLista[num].estado;
    setTarefas(novaLista);

    if (novaLista[num].estado) {
      const novaListaConcluidas = tarefasConcluidas.filter((_, i) => i !== num);
      setTarefasConcluidas(novaListaConcluidas);
    } else {
      const tarefaMovida = novaLista.splice(num, 1)[0];
      setTarefasConcluidas([...tarefasConcluidas, tarefaMovida]);
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
          >
            Mostrar Concluídas
          </button>
        </Link>
      </form>

      <main>
        {tarefas.length > 0 &&
          mostrarAtivas
            ? tarefas.map((task, index) => (
                <TaskList key={index} task={task} num={index} alterarEstadoTarefa={alterarEstadoTarefa} removerTarefa={removerTarefa}/>
              ))
            : null}
        {tarefasConcluidas.length > 0 &&
          mostrarConcluidas
            ? tarefasConcluidas.map((task, index) => (
                <TaskList key={index} task={task} num={index} alterarEstadoTarefa={alterarEstadoTarefa} removerTarefa={removerTarefa}/>
              ))
            : null}
      </main>
    </>
  );
};

export default TaskApp

