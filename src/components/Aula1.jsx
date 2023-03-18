const Aula1 = () => {
    const nomes = ['João', 'Maria', 'José'];
    const listaNomes= nomes.map((nome, index) => <li key={index}>{nome}</li>);
       return (
       <div>
            <ul>
                {listaNomes}
            </ul>
        </div>
    );
}
export default Aula1;