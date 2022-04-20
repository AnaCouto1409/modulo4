const express = require('express'); //importação de código

var app = express();

//vamos importar

const AnaController = require('../sorriso/controllers/Ana-controller');
const Ana = require('../sorriso/controllers/aluno-controller');

//body parser

app.use(use);
AnaController(app)
Ana(app)
//vamos roda o servidor na porta

app.listen(8000,()=>{
    console.log('Rodando na porta 8000')
})

// npm install nodemon --save-dev (LOCALMENTE) Execultando com script
// npm install nodemon -g (GLOBALMENTE) Execulta no terminal