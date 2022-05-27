import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

import riuter from './APP/router'
app.use(router);

app.listen(3000, ()=> console.log("Api rodando"))


https.createServer({
    cert: fs.readFileSync('SRC/SSL/code.crt'),
    //não fiz o key
}, app).listen(3001, ()=> console.log("Rodando em https"))
