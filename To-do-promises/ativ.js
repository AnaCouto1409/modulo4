import express from 'express' //importação

const app = express()
app.get ('/', function (req,resp){
    req.send('Hello World')
})
app.listen(8000,()=>
console.log('rodando o servidor na porta 8000')
);
//rotas e caminhos
//diferentes endpoints que utilizados por uma aplicação
//para disponibilizar o protocolos
//pode ser get, post, delete
//GET, POST, DELETE








