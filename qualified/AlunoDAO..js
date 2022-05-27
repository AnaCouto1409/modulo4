class {
    constructor(bd){
        this.bd = bd
    }

    listarAluno{
        return new Promise((resolve, reject) =>{
            this.bd.all('SELECT * FROM ALUNOS', (error, rows)=>{
                if(error){
                    reject('Erros na seleção do banco de dados')
                }else{
                    resolve({'Banco de dados disponível- entidade alunnos': rows})
                }
            })
        })
    }
    listarAlunoID(id){
        return new Promise((resolve, resolve)=>{
            this.bd.all(`SELECT * FROM ALUNOS where id=${id}`, (error, results)=>{
                if(error){
                    reject(error)
                } else{
                    resolve(results)
                }
            })
        })
    }
    inserirAlunos(newAluno){
        return new Promise((resolve, reject)=>{
            this.bd. run(`INSERT INTO ALUNOS (CONDIÇÕES_DE_PAGAMENTO)VALUES (?,?,?,?,?,?,?,?,?,?,?)`
            [new.condições_de_pagamento.nome_FK], (error)=>{
                if(error){
                    reject('Erro na inserção do banco de dados!')
                }else{
                    resolve('DEUS CERTO INSERIR OH GLORY!')
                }
            })
        })
    }
    deleteAlunos(id){
        return new Promise((resolve, reject)=>{
            this.bd.run(`DELETE FROM ALUNOS WHERE ID=${id}`, (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve('Aluno deletado com SUCESSO')
                }
            })
        })
    }
    changeAlunos(parametros){
        return new Promise((resolve, reject)=>{
            console.log(parametros)
            this.bd.run(`UPDATE ALUNOS SET ID =?, IDADE =?, CONDIÇÕES_DE_PAGAMENTO =?, NOME_SOCIAL_FK`, parametros (error)=>{
                if(error){
                    console.log(error)
                    reject(error);
                } else{
                         resolve('Alterados os dados com SUCESSO')   
                }
            })
        })
    }
module.exports = AlunoDAO;
