const checagemTemperatura = temp => { 
    return temp >=37.5 ? `${temp} - Febril`: `${temp} - Não Febril`;
};
app.get("/ano", (request, response) => {
  
  response.json({data: 2022})
});
app.get("/mes", (request, response) => {
  
  response.json({data: 3})
});

app.get("/dia", (request, response) => {
  
  response.json({data: 5})
});