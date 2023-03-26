import { useContext, useState } from 'react'
import { ContadorContext } from '../context/ContadorContext'

const UsandoUseContext = () => {
  const { nome, count, mudarNome, mudarContador, listaDeArrays, adicionarArray } = useContext(ContadorContext);
  const [inputValue, setInputValue] = useState({ nome: '', numero: '' })

  const handleInputChange = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value })
  }

  const handleButtonClick = () => {
    mudarNome(inputValue.nome)
    setInputValue({ ...inputValue, nome: '' })
  }

  const handleButtonClick2 = () => {
    mudarContador(Number(inputValue.numero))
    setInputValue({ ...inputValue, numero: '' })
  }

  const handleAddArray = () => {
    adicionarArray(inputValue.nome, Number(inputValue.numero));
    setInputValue({ nome: '', numero: '' });
  }

  return (
    <div>
      <h1>Usando useContext</h1>
      <h2>Nome: {nome}</h2>
      <h2>Número: {count}</h2>
      <input
        type="text"
        placeholder="Digite seu novo nome"
        name="nome"
        value={inputValue.nome}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Mudar nome</button>
      <input
        type="number"
        placeholder="Digite um novo número"
        name="numero"
        value={inputValue.numero}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick2}>Adicionar</button>
      <ul>
        {listaDeArrays.map((item) => (
          <li key={item.id}>
            Nome: {item.nome} | Número: {item.numero}
          </li>
        ))}
      </ul>
      <button onClick={handleAddArray}>Adicionar à lista</button>
    </div>
  )
}

export default UsandoUseContext;
