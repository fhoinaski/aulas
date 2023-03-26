function useAuth(usuario) {
  const usuariosPermitidos = ["Bruno", "Fernando", "João"];
  const autenticado = usuariosPermitidos.includes(usuario);

  if (autenticado) {
    return { autenticado: true, token: "token-de-autenticacao" };
  } else {
    return { autenticado: false, token: null };
  }
}

export default useAuth;
