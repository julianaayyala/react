
import { useState } from 'react'
import Questao from '/src/componentes/questao'

export default function Questionario(props){
    const [listaPerguntas, setListaPerguntas] = useState(props.listaPerguntas)
    const respondeu=(id, acertou)=>{
        const novaListaPerguntas = listaPerguntas.map(pergunta=>{
            if(id==pergunta.id){
                const novoObjetoPergunta={...pergunta, acertou:acertou}
                return novoObjetoPergunta
            } else {
                return pergunta
            }
        })
        setListaPerguntas(novaListaPerguntas)
    }
    console.log(listaPerguntas);

    const acertos = listaPerguntas.filter((pergunta)=>pergunta.acertou===true)
    const erros = listaPerguntas.filter((pergunta)=>pergunta.acertou===false)
    const naoRespondidas = listaPerguntas.filter((pergunta)=>pergunta.acertou === undefined)

    console.log("Acertos");
    console.log(acertos);
    console.log("erros");
    console.log(erros);
    console.log("naoRespondidas");
    console.log(naoRespondidas);
    
    return <>
        <title>QUESTIONÁRIO</title>

        <div>
            <h3>Questionário</h3>
            <br/>
            {listaPerguntas.map(pergunta=><>
                <Questao 
                    pergunta={pergunta.pergunta} 
                    resposta={pergunta.resposta}
                    onRespondeu={(acertou)=>respondeu(pergunta.id, acertou)}
                    />
            <hr/>
            </>)}
            <h3>Score final:</h3>
            <br />{acertos.length}<label> corretas 🟢</label>
            <br />{erros.length}<label> incorretas 🔴</label>
            <br />{naoRespondidas.length}<label> Não respondidas ⚠️</label>
        </div>
    </>
}
