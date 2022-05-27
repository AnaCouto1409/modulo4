//TODO-API
//TO-DO API
//faremos uma API para organizar nossa interface de programação

import { appendFile } from "fs";


//ENTIDADES - necessário ter http
//Atributos- 
//dentro de uma aplicação quais as entidades e atributos
//que se deve ter para essa aplicação

//dentro da API quais são os requisistos e atributos

//autenticação do usuario
//autenticar o login e senha

//pedir empresatado informações para pedir conforma aplicação
//
//API/REST
//GET REQ, RESPPARA GARANTI A REQUISIÇÃO
//HTTP
//CADA APICAÇÃODE CRUD REALIZARÁ UMA aplicaçãod e verbo diferente
import express, { application } from 'express'

const  app = express()
app.get('user', function (req, resp){
req.send ('Aqui estou trotando');
})
application.get('senha', function(req, resp){
    resp.send('Envia minha senha')
})
app.listen(8000,() =>
console.log('Rodando no console 8000')
);

















//conhecimento e e xperiencia 
// codificação de http