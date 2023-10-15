import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const TaskApp = () => {
    let [tarefas, setTarefas] = useState([])
    let [tarefa, setTarefa] = useState('')

    function adicionarTarefa() {
        setTarefas([...tarefas, tarefa])
        console.log(tarefas)
        setTarefa("")
    }

    return (<>
        <form>
            <textarea id='tarefa' value={tarefa} onChange={(e) => setTarefa(e.target.value)}></textarea>
            <button type='button' onClick={tarefa != null ? () => {adicionarTarefa()} : null}>+</button>
        </form>
        
        {tarefas.length > 0 && (
            tarefas.map((task, index) => (
                <div className='task' key={index}>
                    {task}
                    <input type="radio" name="radio" className='checkmark'></input>
                    <DeleteIcon />
                </div>
            ))
        )}
    </>)
}

export default TaskApp
