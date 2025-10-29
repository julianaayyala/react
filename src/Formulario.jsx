export default function(){
    function enviar(formData){
        console.log(formData);
        const nome = formData.get("nome")
        const email = formData.get("email")
        const notificar = formData.get("notificar")
        alert(nome + " " + email + " " + notificar)
        
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
    </>
}