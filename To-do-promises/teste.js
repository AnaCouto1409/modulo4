const comunicacaoPerdida = () => Math.random() > 0.5 ? true :false;
const promessa = new Promise((resolve, reject)=>{
    if(comunicacaoPerdida(){
        reject('comunicacação perdida')
    }else{
        resolve('Comunicação feita com sucesso!')
    }
})
//depois tem o then e o catch