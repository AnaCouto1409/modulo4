import express from 'express'
//instanciar
var app = express();

app.get('/user', function (req, resp){
    resp.send('Rota ativada com GET e ecurso usuario: devem ser retornados')// ou json para enviar
})
app.get('/user', function (req, resp){
    resp.send('Rota ativada com GET e ecurso usuario: devem ser retornados')// ou json para enviar
})
app.get('/tarefas', function (req, resp){
    resp.send('Rota ativada com GET e recurso tarefas: o valor de tarefas devem ser retornados')// ou json para enviar
})
app.listen(8000,() =>
    console.log('Porta de localhost 8000')
)



