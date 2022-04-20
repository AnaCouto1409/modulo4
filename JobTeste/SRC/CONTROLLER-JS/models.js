const bd = require('/src/bd.js');
const Aluno = ('/src/models.js');

const aluno = (app) => {
    app.get('/aluno', function(request, response){
        response.json({"alunos": bd.aluno})
    })
    app.post('/aluno', function(request, response){
        const body = request.body; //pega o corpo da require
         const novoAluno = new aluno(body.nome, body.email, body.senha)

         //logica para inserir cada cliente
            bd.aluno.push(novoAluno);
            //mandar mensagem
            console.log(novoAluno)
            response.send({"novoAluno": novoAluno});
    })
}
module.exports = aluno;









