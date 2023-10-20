import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Concluidas from './pages/Concluidas'
import TaskApp from './pages/TaskApp'

function AppRoutes() {
    const [tarefasConcluidas, setTarefasConcluidas] = React.useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TaskApp />} />
                <Route path='/concluidas' element={<Concluidas tarefasConcluidas={tarefasConcluidas} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes