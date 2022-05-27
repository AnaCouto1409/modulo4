import {Router} from "express"
import { rmSync } from "fs";
import { request } from "http";
import {createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa}
const router = Router();

router.get('/', (request,response)=>{
    response.json({
        "statusCode": 200,
        "msg": "Api Rodando"
})
router.get('/pessoas',selectPessoa);
router.get('/pessoa', selectPessoa)
router.post('/pessoa', insertPessoa);
router.put('/pessoa',updatePessoa);
router.delete('/pessoa', deletePessoa);

export default router;


//resposta do outr codigo






