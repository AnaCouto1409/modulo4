//LEIA A DOCUMENTAÇÃO

const users =[
    {
        nome:"Ana Carolina",
        idade:28,
        animal:"gato"
    },
    {
        nome:"Michelina Souza",
        idade: 12,
        animal: "Hamster"
    },
    {
        nome: "José Eustáquio",
        idade: 32,
        animal: "Gato"
      },
]


//vamos

//hosting, closure, programação procedural e array map 
class Pessoa{
    constructor(nome, sobrenome,amantesGatos){
    this.nome =nome;
    this.sobrenome =sobrenome;
    this.amantesGatos = amantesGatos;
}
    nomeCompleto(){
        let nomeCompleto = this.nome+ ' '+this.sobrenome;
        return nomeCompleto;
    };
    abreviacao(){
        let nomeAbv ='';
        for(let i= 0; i< this.nome.length; i++){
            if( i ==0){
                nomeAbv+= this.nome[i];
            }
            if( i ==' '){
                nomeAbv+='.'
            }
        }
        
        for(let i=0;i<this.sobrenome.length;i++){
            if(i == 0){
                nomeAbv+= this.sobrenome[i]
            }
            if(this.sobrenome[i]==' '){
                nomeAbv+= '.'+this.sobrenome[i+1]
            }
        }
        for(let i=0;i<this.amantesGatos.length;i++){
            if(i == 0){
                nomeAbv+= this.amantesGatos[i]
            }
            if(this.amantesGatos[i]==' '){
                nomeAbv+= '.'+this.amantesGatos[i+1]
            }
        }
        let maiuscula =nomeAbv.toUpperCase();
        return maiuscula
        
    }
}

//decarado com cosntructor porem sem o metodo array


//mais um treino

class fila{
    constructor(){
        this.arr = [];
    }
    chegada(...num){
        for(let i=0; i< num.length;i++){
            this.arr.push(num[i]);
        }
    }
    partida(){
        if(this.arr.length ==0){
            console.log(`Essa fila está vazia${valor}`)
        }else{
            let excluido = this.arr.shift();
            return excluido;
        }
    }
    mostraFila(){
        console.log(this.arr);
    }
}
let num = new fila();
num.chegada(10,5,6,7);
num.mostraFila();
console.log(num.partida());
num.mostraFila();


//brincando com arrays e metodo map.reduce
//array dentro do reduce pércorre
//cada  elemento dentro da array para que gere um unico valor ao final
 var numeros =[0,1,2,3,4,5,6,7,8,9];
 var total =numeros.reduce((acumulador, numero, indice, original)=> {
     console.info(`${acumulador} total até o momento`);
     console.log(`${indice} indice atual`);
     console.log(`${original} array original`);
     return acumulador += numero;
 }, 0)
 console.warm('acabooou');
 console.log(total)

///isso como ficaria com o array.reduce

const a =[1,2,3,4,5], b= [6,7,8,9,10];
var ab = a.reduce((acumulador, elemento)=> acumulador += elemento,
         b.reduce((acumulador,elemento)=> acumulador += elemento, 0))
         console.log(ab);


//dentro da array de objetos ulha uai

animais=[
    {
        nome:'Fumaça',
        idade:3,
        tipo: 'cachorro'
    },
    {
        nome:'Tobby',
        idade: 6,
        tipo: 'cachorro'
    },
    {
        nome:'Luminha',
        idade:12,
        tipo:'gato'
    },
    {
        nome:'Natasha',
        idade:16,
        tipo:'cachorro'
    },
]
//teamo 

//agora escrevendo com array reduce olha como 
//é tão lindo
const sons =["AuAu", "miau", "cócóricó"];
const sonsHtml = sons.reduce((acc,som) => {
    return (acc += `<li>${som}</li>`);
},"");

//retorno











