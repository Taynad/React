import { useState } from "react"
function Tarefa({nome}){
    const [concluida, setConcluida] = useState(false)

    const marcarComoConcluida = () =>{
        if(concluida === false){
            setConcluida(true);
        }else{
            setConcluida(false);
        }
    }

    return(
        <div>
            <h2>Tarefas</h2>
            <h3>{nome}</h3>
            <h3>Tarefa concluída ? {concluida ? "Sim" : "Não"}</h3>
            <button onClick={marcarComoConcluida}>Marcar como concluída</button>
        </div>
    )
}

export default Tarefa;