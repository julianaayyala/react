import { useState } from "react"

export default function Questao(props){
    const [resposta, setResposta] = useState(null)
    const [textoResposta, setTextoResposta] = useState("")

    const responder=(respostaDoUsuario)=>{
        setResposta(respostaDoUsuario) 
        if(respostaDoUsuario == props.resposta){
            setTextoResposta("🟢 Correto!")
            props.onRespondeu(true)
        } else {
            setTextoResposta("🔴 Incorreto!")
            props.onRespondeu(false)
        }
    }
    return <div>
        
        {props.pergunta}
        <br />
        <button disabled={resposta!==null} onClick={()=>responder(true)}>Verdadeiro</button> 
        <button disabled={resposta!==null} onClick={()=>responder(false)}>Falso</button>
        <br />
        {textoResposta}
    </div>
}