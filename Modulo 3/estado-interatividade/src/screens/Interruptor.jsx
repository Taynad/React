import { useState } from "react";

function Interruptor(){
    const [status, setStatus] = useState(false);

    const mudarEstado = () => {
        if(status === false){
            setStatus(true);
        }else{
            setStatus(false);
        }
        
    }

    return(
        <div>
            <h2>Interruptor está {status ? "Ligado" : "Desligado"}</h2>
            <button onClick={mudarEstado}>Desligar/Ligar</button>
        </div>
    )
}

export default Interruptor;