import {useState} from "react"

function Pessoa({nome, idadeInicial}){
    const [idade, setIdade] = useState(idadeInicial);
    
    const envelhecer = () =>{
        setIdade(idade + 1);
    }

    return(
        <div>
            <h2>Olá, meu nome é {nome}</h2>
            <p>Tenho {idade} anos</p>
            <button onClick={envelhecer}>Fazer Aniversário 🎉</button>
        </div>
    )
}

export default Pessoa;