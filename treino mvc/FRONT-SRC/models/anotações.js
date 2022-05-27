class Anotacoes{
    constructor(titulo,notas){
        if(typeof titulo=='string' && typeof notas=='string'){
            this.titulo=titulo;
            this.notas=notas;
        }else{
            alert('Criação de notas- dados inválidos');
        }
    }
}