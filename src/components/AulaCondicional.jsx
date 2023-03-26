import { useState,useEffect } from 'react';
const AulaCondicional = () => {
    const [ativo, setAtivo] = useState(false);

    // função que troca de ativo para inativo
    function handleClick() {
        //se o codigo estiver ativo, ele vai setar como inativo
        setAtivo(!ativo);
        console.log(ativo);
    }
    return (
        <div>
            {ativo ? (
                <button onClick={handleClick}>Login</button>
            ) : (
                <button onClick={handleClick}>Logout</button>
            )}

        </div>
    );
};
export default AulaCondicional;
