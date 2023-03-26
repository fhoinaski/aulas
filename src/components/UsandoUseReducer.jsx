import React, { useReducer } from 'react'

const UsandoUseReducer = () => {
  const [count, dispatch] = useReducer(reducerCount, 0)

  function reducerCount(valorAtual, action) {
    switch (action.type) {
      case 'INCREMENTAR':
        return valorAtual + 1
      case 'DECREMENTAR':
        return valorAtual - 1
      default:
        throw new Error()
    }
  }

  return (
    <div>
      <h1>O numero é {count}</h1>
      <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>+</button>
    </div>
  )
}

export default UsandoUseReducer
