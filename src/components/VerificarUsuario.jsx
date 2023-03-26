import React, { useState } from 'react';
import useAuth from './hooks/useAuth.js';

const VerificarUsuario = () => {
  const [usuario, setUsuario] = useState('');
  const [mensagem, setMensagem] = useState('');

  const { autenticado, token } = useAuth(usuario);

  const handleValidarUsuario = () => {
    if (autenticado) {
      setMensagem('Usuário autenticado');
    } else {
      setMensagem('Usuário não autenticado');
    }
  };

  return (
    <div>
      <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <span>{mensagem}</span>
      <button onClick={handleValidarUsuario}>Validar</button>
    </div>
  );
};

export default VerificarUsuario;
