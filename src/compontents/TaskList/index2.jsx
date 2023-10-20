import DeleteIcon from '@mui/icons-material/Delete';
import './styles.css'

function TaskList({tarefas, setTarefas, tarefasConcluidas, setTarefasConcluidas}) {
  function alterarEstadoTarefa(index) {
    const novaLista = [...tarefas];
    novaLista[index].estado = !novaLista[index].estado;
    setTarefas(novaLista);

    if (!novaLista[index].estado) {
      setTarefasConcluidas((prevConcluidas) => [
        ...prevConcluidas,
        novaLista[index]
      ]);
    } else {
      setTarefasConcluidas((prevConcluidas) =>
        prevConcluidas.filter((tarefa) => tarefa !== novaLista[index])
      );
    }
  }

  function removerTarefa(index) {
    const novaLista = [...tarefas];
    novaLista.splice(index, 1);
    setTarefas(novaLista);
    setTarefasConcluidas((prevConcluidas) =>
      prevConcluidas.filter((tarefa) => tarefa !== tarefas[index])
    );
  }

  return (
    <>
      {tarefas.map((task, index) => (
        <div className={task.estado ? 'task' : 'taskConcluida'} key={index}>
          {task.t}
          <input
            type="checkbox"
            name="radio"
            className="checkmark"
            onChange={() => alterarEstadoTarefa(index)}
          ></input>
          <button onClick={() => removerTarefa(index)}>
            <DeleteIcon />
          </button>
        </div>
      ))}
    </>
  );
};

export default TaskList;
