//permite que seu use uma varia vel antes
//dde declarar a função
//curso webdv

var empresa ="Resilia";
curso ='Webdev';
console.log(empresa+" "+curso);
var curso;

//declare as variaveis antes de usá-las
//closures-conceito-funções aninhadas
function externa(){
    function interna(){
        //
    }
    const result = interna();
    //passar essa função que foi criada dentro da outra
} 
//função externa 
//de criar interna e depois externa
// de retornar tanto faz posso chamar primeiro interne e de pois
// externa
//


function mae(){
    this.nome ="funcao mãe";
    function filha(){
        console.log("Rodando função filha");
        console.log("Nome do escopo da mãe");        
    }
}
//js e voltada para programação tradicional prcedural
//js5 metodos comuns em linguagem funcional
//array maps- mapeamentop e tranformação
// de elementos dentro de um array
//transfomação de todos os elemementos de uma array
//
const saldos =[120.34, 0, 5.29, -72, 13,-25,3];
const saldosDecrementados [];
for(let i=0;i<saldos.length; i++){
    if(saldos[i]<0){
        saldosDecrementados
    }
}



