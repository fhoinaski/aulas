import React, { useContext } from 'react'
import { UsuarioContext } from "../context/CriandoNovoContext";
import { useState } from "react";



const AulaRevUse = () => {
    const usuario = useContext(UsuarioContext);
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (nome !== "") {
            usuario.setNome(nome);
        }
        if (idade !== "") {
            usuario.setIdade(idade);
        }
        if (email !== "") {
            usuario.setEmail(email);
        }
    }
    


    return (
        <div>
            <h1>Seu nome é {usuario.nome}</h1>
            <h2>Sua Idade é {usuario.idade} </h2>
            <h2>Seu email é {usuario.email}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)} />
                <input type="text" placeholder="Digite sua idade" onChange={(e) => setIdade(e.target.value)} />
                <input type="text" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Atualizar Dados</button>
            </form>
        </div>
    )
}

export default AulaRevUse;