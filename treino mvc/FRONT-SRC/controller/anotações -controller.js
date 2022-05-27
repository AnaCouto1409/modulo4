class AnotacoesController{
    constructor(){
        this.arr=[];
    }
    addAnotacao(){
        let title=document.querySelector("#title").value;
        let note=document.querySelector("#nota").value;
        let novo=new AnotacoesController(title,note);
        this.arr.push(novo);
    }
}