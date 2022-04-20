module.exports = (app) =>{
    app.get ('/enigmatica', (request, response) =>{
        response.send('Aqui são os valores de AnaController');
    })
    app.get('/enigmatica', function(request, response){
        response.send('Aqui entra os valores de Ana para verifcação de rota')
    })
}