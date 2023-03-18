// Importar o módulo React e o hook useState
import React, { useState } from 'react';

// Definir o componente ListaTarefas
const ListaTarefas = () => {
// Inicializar os estados das tarefas, item e próximo ID

// 'tarefas' armazena a lista de tarefas e 'setTarefas' é a função para atualizar a lista de tarefas.
const [tarefas, setTarefas] = useState([]);

// 'item' armazena o valor do item atual (texto do input) e 'setItem' é a função para atualizar o valor do item.
const [item, setItem] = useState('');

// 'nextId' armazena o próximo ID disponível para um novo item e 'setNextId' é a função para atualizar o valor do próximo ID.
const [nextId, setNextId] = useState(1);


    // Função para adicionar um item às tarefas
    const addItem = (e) => {
        e.preventDefault();
        // Atualizar a lista de tarefas, adicionando o novo item com um ID único
        setTarefas([...tarefas, { id: nextId, texto: item, concluido: false }]);
        // Limpar o campo de entrada
        setItem('');
        // Incrementar o próximo ID disponível
        setNextId(nextId + 1);
    };

    // Função para alternar o estado concluído de um item
    const toggleItem = (id) => {
        // Mapear as tarefas e atualizar a tarefa com o ID correspondente
        const newLista = tarefas.map((tarefa) =>
            tarefa.id === id ? { ...tarefa, concluido: !tarefa.concluido } : tarefa
        );
        // Atualizar o estado das tarefas
        setTarefas(newLista);
    };

    // Renderizar o componente
    return (
        <div>
            {/* Título da lista de tarefas */}
            <h1>Lista de Tarefas</h1>
            {/* Formulário para adicionar itens à lista */}
            <form onSubmit={addItem}>
                {/* Campo de entrada para o item */}
                <input
                    type="text"
                    value={item}
                    // Atualizar o estado do item quando o valor do campo de entrada for alterado
                    onChange={(e) => setItem(e.target.value)}
                />
                {/* Botão para enviar o formulário e adicionar o item */}
                <button type="submit">Adicionar</button>
            </form>
            {/* Lista de tarefas */}
            <h2>Tarefas</h2>
            <ul>
                {/* Mapear e exibir as tarefas não concluídas */}
                {tarefas
                    .filter((itemObj) => !itemObj.concluido)
                    .map((itemObj) => (
                        <li key={itemObj.id}>
                            <input
                                type="checkbox"
                                checked={itemObj.concluido}
                                onChange={() => toggleItem(itemObj.id)}
                            />
                            {itemObj.texto}
                        </li>
                    ))}
            </ul>
            {/* Lista de tarefas concluídas */}
            <h2>Tarefas Concluídas</h2>
            <ul>
                {/* Mapear e exibir as tarefas concluídas */}
                {tarefas
                    .filter((itemObj) => itemObj.concluido)
                    .map((itemObj) => (
                        <li key={itemObj.id}>
                            <input
                                type="checkbox"
                                checked={itemObj.concluido}
                                onChange={() => toggleItem(itemObj.id)}
                            />
                            {itemObj.texto}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

// Exportar o componente ListaTarefas
export default ListaTarefas
