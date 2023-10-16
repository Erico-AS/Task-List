import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './styles.css'
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
            <button type='button' onClick={tarefa != '' ? () => {adicionarTarefa()} : null}>+</button>
        </form>
        
        <main>
            {tarefas.length > 0 && (
                tarefas.map((task, index) => (
                    <div className='task' key={index}>
                        {task}
                        <input type="radio" name="radio" className='checkmark'></input>
                        <DeleteIcon />
                    </div>
                ))
            )}
        </main>
    </>)
}

export default TaskApp
