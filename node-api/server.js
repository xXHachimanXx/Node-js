const express = require("express"); //"importar express"(retorna um função express())

const app = express(); //definiar app como uma func express()

//Criar uma rota de acesso(no caso a raiz é passada como primeiro parametro)
app.get("/", (req, res) => {
    res.send("Hello, world!!!");
});

app.listen("8080"); //localhost:8080