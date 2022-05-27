//negação do e nega todas a partes
const tarefa = require('../Controllers');

const tarefa = (app, sqlite) =>{
    app.get('/tarefa', (require, response) =>{
        //sqlite.all(SELECT * FROM usuarios)
        try{
            const body = req.body // importante validar campos
            const novaTarefa = newTarefa(body.usuario, body.titulo, body.status)
            
         }
    })
}
     app.post('/tarefa', (req, res) => {
        try {
            const body = req.body
                //Importante validar os campos com o model
            const novaTarefa = new Tarefa(body.usuario, body.titulo, body.status)

            //Logica de inserção da entidade no bd
            bd.tarefa.push(novaTarefa)
            console.log(bd.tarefa)

            // Resposta para o cliente
            res.json({
                "requisicao": novaTarefa,
                "erro": false
            })
        } catch (error) {
            // Resposta em caso de erro
            res.json({
                "mensagem": error.message,
                "erro": true
            })
        }

    })

}
module.exports = tarefa;