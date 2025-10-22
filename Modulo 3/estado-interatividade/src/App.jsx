import Pessoa from "./screens/Pessoa"
import Tarefa from "./screens/Tarefa"
import Contador from "./screens/Contador"
import Interruptor from "./screens/Interruptor"
import MostrarEsconder from "./screens/MostrarEsconder"

function App() {
  return (
    <div>
      <Pessoa  nome="Tayna" idadeInicial={21}/>
      <Tarefa nome="Estudar React"/>
      <Contador/>
      <Interruptor/>
      <MostrarEsconder/>
    </div>
  )
}

export default App
