import { useState } from "react";

function MostrarEsconder(){
    const [mudarEstado, setMudarEstado] = useState(false);

    const textoVisivel = () => {
        if(mudarEstado === false){
            setMudarEstado(true);
        }else{
            setMudarEstado(false);
        }
    }

    return(
        <div>
            <h2>{mudarEstado ? "Texto Visível" : " " }</h2>
            <button onClick={textoVisivel}>Mostrar/Esconder</button>
        </div>
    )
}

export default MostrarEsconder;