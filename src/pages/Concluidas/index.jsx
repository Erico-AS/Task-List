import React from 'react'
import { Link } from 'react-router-dom'

const Concluidas = () => {
    return (<>
        <header>
            <Link to="/">
                Home
            </Link>
        </header>
        <div>
            <h1>Tarefas Concluídas</h1>
        </div>
    </>)
}

export default Concluidas