const bd = require('../bd');
const aluno = require('../models-tarefas');
const Aluno = require('../bd')

const aluno = (app) =>{
    app.post('/aluno', function (request, response){
        const novoAluno = new Aluno(req.body.nome, req.body.email, req.body.senha)
        bd.aluno.push(novoAluno); //mandar mesnagem
        console.log(novoAluno)
        response.send({"NovoAluno": novoAluno});
    })
    app.get('/aluno', function(request, response){
        response.json({"alunos": bd.aluno})
    })
    app.get('/aluno/:nome/:idade', function(request, response){
        response.json({"Aluno": req.params.nome,
        "Idade": req.params.idade}
    });
    app.delete('/aluno/:nome', function (request,response){
        const nomeParametro = req.params.nome;
        const indeAluno = bd.aluno.findIndex(aluno =>aluno.nome == nomeParametro)

        if(indexAluno > -1){
            const alunoDeletado = bd.aluno.splice(indeAluno,1)
            response.json({"Aluno": alunoDeletado})
        }else{
            response.json("Aluno não encontrado!!!!!")
        }
    })
}
module.exports = aluno;