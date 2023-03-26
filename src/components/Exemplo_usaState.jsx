import React, { useState } from 'react';
import { TiPen, TiDeleteOutline } from "react-icons/ti";
import ConfirmModal from './modal/ConfirmModal';
import EditModal from './modal/EditModal';

export const Exemplo_usaState = () => {
    const [novoNome, setNovoNome] = useState('');
    const [listaNomes, setListaNomes] = useState([]);
    const [erro, setErro] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [nomeToDelete, setNomeToDelete] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [nomeToEdit, setNomeToEdit] = useState(null);
    const [nomeEditado, setNomeEditado] = useState('');

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (novoNome.trim() !== '') {
            setListaNomes([...listaNomes, novoNome]);
            setNovoNome('');
            setErro('');
        } else {
            setErro('Por favor, digite um nome');
        }
    };

    const handleSaveEdit = () => {
        const index = listaNomes.indexOf(nomeToEdit);
        listaNomes[index] = nomeEditado; // Altere esta linha
        setListaNomes([...listaNomes]);
        setNomeEditado(''); // Adicione esta linha
        handleCloseEditModal();
    };

    const handleInputChange = (e) => {
        setNovoNome(e.target.value);
    };
    const handleEditModalInputChange = (e) => {
        setNomeEditado(e.target.value);
    };

    const handleFocus = () => {
        setErro('');
    };

    const handleEdit = (nome) => {
        handleShowEditModal(nome);
    };

    const handleDelete = (nomeToDelete) => {
        setNomeToDelete(nomeToDelete);
        handleShowModal();
    };

    const handleConfirmDelete = () => {
        const index = listaNomes.indexOf(nomeToDelete);
        listaNomes.splice(index, 1);
        setListaNomes([...listaNomes]);
        handleCloseModal();
    };

    const handleShowEditModal = (nome) => {
        setNomeToEdit(nome);
        setNomeEditado(nome); // Adicione esta linha
        setShowEditModal(true);
    };


    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };


    return (
        <div>
            <ul>
                {listaNomes.map((nome, index) => (
                    <li key={index}>
                        {nome}
                        <button style={{ color: 'red', background: 'transparent', width: 25, margin: 10, padding: 0 }} onClick={() => handleEdit(nome)}>
                            <TiPen />
                        </button>
                        <button style={{ color: 'red', background: 'transparent', width: 25, margin: 10, padding: 0 }} onClick={() => handleDelete(nome)}>
                            <TiDeleteOutline />
                        </button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={erro ? erro : novoNome}
                    onFocus={handleFocus}
                    onChange={handleInputChange}
                />
                <button type="submit">Registrar</button>
            </form>
            <ConfirmModal
                show={showModal}
                onHide={handleCloseModal}
                onConfirm={handleConfirmDelete}
                onCancel={handleCloseModal}
                message={`Deseja realmente excluir o nome "${nomeToDelete}"?`}
            />
            <EditModal
                show={showEditModal}
                onHide={handleCloseEditModal}
                nome={nomeEditado} // Altere esta linha
                onChange={handleEditModalInputChange} // Altere esta linha
                onSave={handleSaveEdit}
            />

        </div>
    );
};
