import './App.css';
import { Exemplo_usaState } from './components/Exemplo_usaState';
import ListaTarefas from './components/ListaTarefas';
import  UsandoTodoLista from './components/UsandoTodoLista2';
function App() {

  return (
    <div className="App">
      
      <Exemplo_usaState></Exemplo_usaState>
      <br />
      <ListaTarefas></ListaTarefas>
    </div>

  );
}

export default App;