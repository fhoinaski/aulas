import { createContext, useState } from 'react'

//criar contexto sempre com letra maiuscula e fica fora do componente que vai usar o contexto.
export const ContadorContext = createContext({ nome: "João", count: 1, mudarNome: () => {}, mudarContador: () => {}, listaDeArrays: [], adicionarArray: () => {} });

export const ContadorProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [nome, setNome] = useState("João")
  const [listaDeArrays, setListaDeArrays] = useState([])

  const mudarNome = (novoNome) => {
    setNome(novoNome)
  }

  const mudarContador = (novoNumero) => {
    setCount(novoNumero)
  }

  const adicionarArray = (nome, numero) => {
    const novoArray = { nome, numero };
    setListaDeArrays([...listaDeArrays, novoArray]);
  }

  return (
    <ContadorContext.Provider value={{ nome: nome, count: count, mudarNome: mudarNome, mudarContador: mudarContador, listaDeArrays: listaDeArrays, adicionarArray: adicionarArray }}>
      {children}
    </ContadorContext.Provider>
  )
}

