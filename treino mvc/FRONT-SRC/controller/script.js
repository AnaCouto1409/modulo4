let novoArray=new AnotacoesController();

let botao=document.querySelector("#botao-submit");

botao.addEventListener('click',function(event){
    event.preventDefault();
    novoArray.addAnotacao();
    console.log(novoArray);
})
//ponto e virgula para deixar ajeitado

