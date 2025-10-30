import { useState } from "react";

export default function Formulario(){
    const [contatos, setContatos] = useState([])
    const [maxId, setMaxId] = useState(1)

    function excluir(id){
        let novoContatos = contatos.filter(contato=>contato.id != id)
        setContatos(novoContatos)
    }

    function enviar(formData){
        console.log(formData);
        const nome = formData.get("nome")
        const email = formData.get("email")
        const notificar = formData.get("notificar")
        alert(nome + " " + email + " " + notificar)
        let novoContato = {
            id:maxId,
            nome:nome,
            email:email,
            notificar:notificar
        }
        let novoContatos = [...contatos, novoContato]
        setContatos(novoContatos)
        setMaxId(maxId+1)
    }
    return <>
        <form action ={enviar}>
            <label>Nome: <input name="nome" required/></label>
            <br />
            <label>E-mail: <input type="email" name="email" /></label>
            <br />
            <label><input type="radio" name="notificar" value="sim"/>Sim</label>
            <label><input type="radio" name="notificar" value="nao"/>Não</label>
            <br />
            <br />
            <button type="submit">Enviar</button>
        </form>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Notificar</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {contatos.map(contato=><tr>
                    <td>{contato.id}</td>
                    <td>{contato.nome}</td>
                    <td>{contato.email}</td>
                    <td>{contato.notificar}</td>
                    <td><button onClick={()=>excluir(contato.id)}>Excluir</button></td>
                    <td><button>Editar</button></td>
                </tr>)}
            </tbody>
        </table>
    </>
}