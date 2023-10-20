import React from 'react';
import { Link } from 'react-router-dom';

function Concluidas({ tarefasConcluidas, alterarEstadoTarefa, removerTarefa }) {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
      </header>
      <div>
        <h2>Tarefas Concluídas</h2>
        {/*tarefasConcluidas.length > 0 ? (
          tarefasConcluidas.map((task, index) => (
            <TaskList key={index} task={task} num={index} alterarEstadoTarefa={alterarEstadoTarefa} removerTarefa={removerTarefa}/>
          ))
        ) : (
          <p>Nenhuma tarefa concluída.</p>
        )*/}
      </div>
    </>
  );
}

export default Concluidas;

