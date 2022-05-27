const bd = require('/controller-js/bd.js')
module.exports = (app) =>{
    app.get('usuario', function(request, response)=>{
        response.send(bd)
    })
    app.post('/usuarios', function(request, response)=>{
        bd.usuario.push(request.body)
    })
}

//requisição co rotas co  o verbo get e post 
//GET -- ler
//post criar

//ai tem um banco de dados com arrays vazios

 const bd{
    "Aluno": [],
    "Facilitador": []
}//faço uma visualização


