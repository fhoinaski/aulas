import React, { useReducer, useState } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TAREFA':
      return {
        listaDeTarefas: [
          ...state.listaDeTarefas,
          {
            id: Math.random(),
            texto: action.texto.trim(),
            finalizada: false
          }
        ]
      }
    case 'REMOVE_TAREFA':
      return {
        listaDeTarefas: state.listaDeTarefas.filter(
          (tarefa) => tarefa.id !== action.id
        )
      }
    default:
      throw new Error()
  }
}

const UsandoTodoLista = () => {
  const [textoTarefa, setTextoTarefa] = useState('')
  const [state, dispatch] = useReducer(reducer, { listaDeTarefas: [] })

  const adicionarTarefa = () => {
    if (textoTarefa.trim() !== '') {
      dispatch({ type: 'ADD_TAREFA', texto: textoTarefa })
      setTextoTarefa('')
    }
  }

  const removerTarefa = (id) => {
    dispatch({ type: 'REMOVE_TAREFA', id })
  }

  return (
    <div>
      <input
        type="text"
        value={textoTarefa}
        onChange={(e) => setTextoTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {state.listaDeTarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.texto}
            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsandoTodoLista
