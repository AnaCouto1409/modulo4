const { response } = require("express");
const express = require("express");
const { request } = require("http");
const app = express();

app.get('/.consultar', (request, response)=>{
    response.sendStatus(200);
});
module.exports = app;