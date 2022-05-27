module.exports = function addCards(document, elementData){
    var main = document.querySelector('main')

    for(let cont = 0; cont < elementData.length; cont++){
        var div = document.createElement('div')
    
        for(let j=0; j< elementData[cont].length;j++){
            var paragrafo =document.createElement('p')
            paragrafo.textContent = elementData[cont][j]
            div.appendChild(paragrafo)
        }
        main.appendChild(div)
    }
}

//Qualified sobre abrig de cachorros

module.exports = function addCards(document, elementData){
    var main = document.querySelector('main')
    for(let cont =0; cont <elementData.length; cont++){
        var div = document.createElement('div')

        for(let j=0; j < elementData[cont].length; j++){
            var paragrafo = document.createElement('p')
            paragrafo.textContent = elementData[cont][j]
            div.appendChild(paragrafo)
        }
        main.appendChild(div)
    }
}
const { response } = require("express")
//tem essa aqui também

const express = require("express");
const { request } = require("http")
const app = express();
app.use(express.json())// json é melhor e mais seguros como requisiçãode resposta


const db ={bdAdocao: []};

app.get("/cachorros/:id", (request, response)=>{
    const id = request.params.id -1
    const cachorro = db.bdAdocao[id]
    if(cachorro ===undefined){
response.send(404)
}else{
    response.json(cachorro)
}
});
app.post("/cachorros", (request, response)=>{
    const cachorro = request.body
    db.bdAdocao.push(cachorro)
    response.json(cachorro)
});
module.exports = app;
