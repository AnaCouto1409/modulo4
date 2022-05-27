//uma requisição pelo o srvidor http e  mesmo responde
//te uma resposta com verbos, GET, post 
import validacoes from "./teste3.js"

class usuarios{
	static routers (app){
	app.get("./usuarios",(request, response) =>{
		res.send("<h1>teste</h1>")
	});
		app.post("./senha", (request, response) =>{
			res.send("A requisisção foi feita com o verbo POST")
		});
	}
}
app.listen(()=>
		console.log(" Porta localhosta realizada com SUCESSO")
		) 