const bd = require('../src/tarefa-controller')

const usuario = (app, sqlite3)=>{
    app.get('/usuario', (request, response)=>{
        sqlite3.all(`SELECT * FROM USUARIOS`, (error, rows,)=>{
            if(error){
                response.json("Erro ao selecionar banco")
            }else{
                response.json({"banco selecionado :rows"})
            }
        })
    })
    app.post('/usuario', (request,response)=>{
        //pegar o body e suas informações de dentro
        const body= req.body
        const novoUsuario = new usuario(body.nome, body.email, body.senha)
        bdSqlite.run(`INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)`,
        [novoUsuario.nome, novoUsuario.email, novoUsuario.senha],
        (error)=>{
            if(error){
                response.json(error)
            }else{
                response.json("Deus certo!!!")
            }
        })
    })
    app.get('/usuario/:nome', (request, response)=>{
        const nome = req.params.nome
        response.json({
            "mensagem": "por enquanto",
            "parametro": nome,
        })
    })
    app.get('/usuario/:email', (request, response)=>{
        const email = request.params.email
        for(let i = 0; i<= sqlite3sqlite3.length; i++){
            if(sqlite3sqlite3[i].email == eamil){
                return `O email encontrado e ${email}`
            }
        }
    })
    app.put('/usuario/:email',(request, response)=>{
        const email = request.params.email
        const body = request.body
        const indexUsuario = sqlite3sqlite3.usuario.findIndex((usuario => usuario.email === email))

        try{
            if(indexUsuario > -1){
                const usuarioAntigo = sqlite3sqlite3.usuario[indexUsuario]
                const usuarioAtualizado = new usuario(
                    body.nome || usuarioAntigo.nome,
                    body.email || usuarioAntigo.email,
                    body.senha || usuarioAntigo.senha,
                    usuarioAntigo.id,
                )
                const dadoUsuariAtualizado = sqlite3sqlite3.usuario.splice(indexUsuario,1,usuarioAntigo)
                response.json({"atualizado": dadoUsuariAtualizado,})
            }else{
                response.json({"mensagem": `Usuario com email "${email}`})
            }
        }catch(error){
                response.json({"mensagem": error.message,})
        }
    })
    app.delete('/usuario/:email', (request, response)=>{
        const email = request.params.email
        const indexUsuario = sqlite3sqlite3.usuario.findIndex((usuario=>usuario.email===email))

        //so fazer o if e else
        if(indexUsuario > -1){
            const usuarioDeletado = sqlite3sqlite3.usuario.splice(indexUsuario,1)
            response.json ({"deletado": usuarioDeletado,})
        }else{
            response.json({
                "mensagem": `Usuário com email ${email} deletado com SUCESSO`
            })
        }
    })
}


module.exports = usuario;






