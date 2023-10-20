import React from 'react';
import { Link } from 'react-router-dom';

const Concluidas = ({ tarefasConcluidas }) => {
    console.log(tarefasConcluidas)
  return (
    <>
      <header>
        <Link to="/">Home</Link>
      </header>
      <div>
        <h2>Tarefas Concluídas</h2>
        {tarefasConcluidas.length > 0 ? (
          tarefasConcluidas.map((task, index) => (
            <div className='taskConcluida' key={index}>
              {task.t}
            </div>
          ))
        ) : (
          <p>Nenhuma tarefa concluída.</p>
        )}
      </div>
    </>
  );
};

export default Concluidas;
