const express = require('express');
var app = express();

const AnaController = require('live-codind')

AnaControllerControll(app)
AnaController(app)

app.listen(8000, ()=>{
    console.log('Arruma na portal 8000');
})
//faz o desenvovimento no scvript local
//da maquina
//funcionalidades do Node tem que asvezes instalar um de um
//ou dar somente um comando
