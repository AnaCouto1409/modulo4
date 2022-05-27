

//o app de cima e pra pegar body e inserir informações

const body = rq.body
const novoUsuario = new usuario(body.nome, body.email, body.senha)
body.run(`INSERT INTO USUARIO (NOME, EMAIL, SENHA) VALUES (?,?,?,)`
[novoUsuario.nome, novoUsuario.email, novoUsuario.senha]
(error =>{
    if(error){
        Response.json(error)
    }else{
        Response.json("Deu cero inserir")
    }
})
)
//inserir e acresecntar com o banco de dados









