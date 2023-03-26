import React, { useState, useEffect } from 'react'

const UsandoUseEffect = () => {
    const [cor, setCor] = useState('red')
    const div = React.useRef(null)
    useEffect(() => {
        div.current.style.backgroundColor = cor
    }, [cor])


    return (
        <>
          <div ref={div} style={{ width: '100px', height: '100px', backgroundColor: cor }}></div>
          
          <button onClick={() => setCor('red')}>Vermelho</button>
          <button onClick={() => setCor('blue')}>Vermelho</button>
          <button onClick={() => setCor('yellow')}>Vermelho</button>
        </>
      );
      

}
export default UsandoUseEffect;