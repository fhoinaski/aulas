import { createContext, useState } from "react";

export const UsuarioContext = createContext({
  nome: "João",
  idade: "20",
  email: "joao@email.com",
  setNome: () => {},
  setIdade: () => {},
  setEmail: () => {},
});

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nome: "João",
    idade: "20",
    email: "joao@email.com",
  });

  function setNome(novoNome) {
    setUsuario((usuarioAnterior) => ({ ...usuarioAnterior, nome: novoNome }));
  }

  function setIdade(novaIdade) {
    setUsuario((usuarioAnterior) => ({ ...usuarioAnterior, idade: novaIdade }));
  }

  function setEmail(novoEmail) {
    setUsuario((usuarioAnterior) => ({ ...usuarioAnterior, email: novoEmail }));
  }

  return (
    <UsuarioContext.Provider value={{ ...usuario, setNome, setIdade, setEmail }}>
      {children}
    </UsuarioContext.Provider>
  );
};
