const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();
const cors = require("cors");
app.use(cors());

let liga = 0;
let desliga = 0;
let restart = 0;

app.post("/", jsonParser, function (req, res) {
  // Define o cabeçalho Content-Type e status de resposta
  res.setHeader("Content-Type", "application/json");
  res.status(200);

  // Armazena os valores recebidos na rede
  liga = req.body.liga;
  desliga = req.body.desliga;
  restart = req.body.restart;

  res.end();
});

app.get("/", function (req, res) {
  // Retorna os valores armazenados
  res.json({
    liga: liga,
    desliga: desliga,
    restart: restart,
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
