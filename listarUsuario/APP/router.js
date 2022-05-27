import { Express } from "express";
const app = express();
app.use[express.json()];

import router from './router.js'
app.use(router);

app.listen(3000, ()=> console.log("Api rodando!"))