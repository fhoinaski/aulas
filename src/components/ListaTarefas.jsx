// Importar o módulo React e o hook useState
import React, { useState } from 'react';

// Definir o componente ListaTarefas
const ListaTarefas = () => {
    // Inicializar o estado das tarefas (array), item (string) e itens marcados (array)
    const [tarefas, setTarefas] = useState([]);
    const [item, setItem] = useState('');
    const [checkedItems, setCheckedItems] = useState([]);
    

    // Função para adicionar um item às tarefas
    const addItem = (e) => {
        // Prevenir a ação padrão do formulário (recarregar a página)
        e.preventDefault();
        // Atualizar a lista de tarefas, adicionando o novo item
        setTarefas([...tarefas, { texto: item, concluido: false }]);
        // Limpar o campo de entrada
        setItem('');
    }

    // Função para alternar o estado concluído de um item
    const toggleItem = (index) => {
        // Criar uma cópia da lista atual de tarefas
        const newLista = [...tarefas];
        // Alternar o valor 'concluido' do item no índice fornecido
        newLista[index].concluido = !newLista[index].concluido;
        // Atualizar o estado das tarefas
        setTarefas(newLista);
        // Imprimir a lista de tarefas no console
        console.log(tarefas);
    }

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
            {/* Lista de itens */}
            <ul>
                {/* Mapear as tarefas para elementos de lista (li) */}
                {tarefas.map((itemObj, index) => (
                    <li key={index}>
                        {/* Adicionar um checkbox para controlar o estado concluído do item */}
                        <input
                            type="checkbox"
                            checked={itemObj.concluido}
                            // Chamar a função toggleItem quando o checkbox for marcado ou desmarcado
                            onChange={() => toggleItem(index)}
                        />
                        {/* Exibir o texto do item */}
                        {itemObj.texto}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Exportar o componente ListaTarefas
export default ListaTarefas;
