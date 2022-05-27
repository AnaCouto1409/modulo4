
//const DATABESE = 'NEW_DATABESE_NAME';
//CONST COLLETION = 'TURMA_BOA_DEMAIS';

use(local)

const database = 'teste';
const collection = 'aula2';

db.createCollection(collection)

db.aula2.insertMany([
    {'_id': 1, 'tipo': 'Goldem', 'idade': 12, 'cor': 'champanhe', new Date(2014-5-14)}
    {'_id': 2, 'tipo': 'Gol', 'Ano': 2002, 'KM':1000},
    {'_id': 3, 'tipo': 'Gol', 'Ano': 2014, 'km': 0},
    {'_id': 4, 'nome':'Germania', 'Ave':'Calopsita', 'idade': 4, new Date(2020-5-20)}
])
db.aula2.find();