import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const EditModal = ({ show, onHide, nome, onChange, onSave }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Nome</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          value={nome}
          onChange={onChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={onSave}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
