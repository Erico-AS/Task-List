import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles.css'

function TaskList({task, num, alterarEstadoTarefa, removerTarefa}) {
  return (
    <div className={task.estado ? 'task' : 'taskConcluida'} key={num}>
      {task.t}
      <input
        type="checkbox"
        name="radio"
        className="checkmark"
        onChange={() => alterarEstadoTarefa(num)}
      />
      <button onClick={() => removerTarefa(num)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default TaskList;
