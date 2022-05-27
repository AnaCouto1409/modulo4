import { response } from "express";
import { appendFile } from "fs";
import { request } from "http";

const express = express();

const app = express();
app.use((request, response, next) =>{
    if(request.body.doce){
        console.log("Passei aqui  krai")
        next()
    }else{
        response.send("<h1>Deu pau!</h1>")
    }
})
appendFile.post("/usuario", (request, response) =>{
    const body =request.body
    console.log(Object.keys(body))
    response.send("<h1>Transformers em arrays</h1>")
})
export default usuarios
//vermeos muitas API escritas de diversas formas e
//feitas de diversas maneiras