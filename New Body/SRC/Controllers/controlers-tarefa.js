const usuario = (app, bd)=>{

    app.get('/usuario', (Request, response) =>{
        response.json({"tarefas": bd.tarefa})
    })
    app.post('/usuario', (require, response)=>{
        try{
            const body= req.body
            const novoUsuario = new usuario(body.nome, body.email, body.senha)
            bd.usuario.push(novoUsuario)
            console.log(bd.usuario)

            response.json({
                "requisicao": novoUsuario,
                "meubanco": bd.usuario,                
            })
        }catch (error){
                res.json({
                    "message": error.message,
                })
        }
        app.get('/usuario/:nome', (request, response)=>{
            const nome = req.params.nome
            res.json({
                "mensagem": "por parametro",
                "parametro": nome,
            })
        })
        app.get('/usuario/:email', (request, response)) => {
            const email = request.params.email  
            for(let i=0; i <= bd.length; i++){
                if(bd[i].email == email){
                    return `O email cadastrado não corresponde`
                }
            }
        }
        app.put('/usuario/:email', (request, response)=>{
            const email = req.params.email 
            const body = request.body
            const indexUsuario = bd.usuario.findIndex((usuario => usuario.email === email))

            
        try {
            if (indexUsuario > -1) {
                const usuarioAntigo = bd.usuario[indexUsuario]
                const usuarioAtualizado = new Usuario(
                    body.nome || usuarioAntigo.nome,
                    body.email || usuarioAntigo.email,
                    body.senha || usuarioAntigo.senha,
                    usuarioAntigo.id,
                )
                const DadoUsuarioAtualizado = bd.usuario.splice(indexUsuario, 1, usuarioAtualizado)
                res.json({"atualizado": DadoUsuarioAtualizado,})
            } else {
                res.json({"mensagem": `Usuário com email "${email}" não existe`,})
            }
        } catch (error) {
            res.json({ "mensagem": error.message,})
        }
    })
    app.delete('usuario/:email', (request, response))=>{
        const email = req.params.email
        const indexUsuario = bd.usuario.findIndex((usuario=>usuario.email===email))

        if(indexUsuario > -1){
            const usuarioDeletado = bd.usuario.splice(indexUsuario, 1)
            res.json({ "deletado": usuarioDeletado, })
        } else {
            res.json({
             "mensagem": `Usuário com email "${email}" não existe`,
            })
        }




module.exports = usuario





