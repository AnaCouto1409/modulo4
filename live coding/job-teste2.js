const express = require("express");
const { request } = require("http");
const { response } = require("./job-teste");
const app = express();

app.get("/consultar", (request, response)=>
 {
    response.sendStatus(500)
})
module.exports = app;