import Mensagem from "./Mensagem"
import CardPessoa from "./CardPessoa"
function App() {
  return (
    <div>
      <h1>Componente com Props</h1>
      <Mensagem nome="Tayna"/>
      <Mensagem nome="Maria"/>
      <Mensagem nome="Jéssica"/>
      <CardPessoa nome="Tayna" idade="21" profissao="Desenvolvedora"/>
    </div>
  )
}

export default App
