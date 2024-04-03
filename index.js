const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();
const cors = require("cors");
app.use(cors());

var liga = 0;
var desliga = 0;
var restart = 0;

app.post("/", jsonParser, function (req, res) {
  // Define o cabeçalho Content-Type e status de resposta
  res.setHeader("Content-Type", "application/json");
  res.status(200);

  // Armazena os valores recebidos na rede
  liga = req.body.liga;
  desliga = req.body.desliga;
  restart = req.body.restart;
  console.log (liga, desliga, restart)
  res.end();
});

app.get("/", function (req, res) {
  // Retorna os valores armazenados
  res.json({
    liga: liga,
    desliga: desliga,
    restart: restart,
  });
  console.log (liga, desliga, restart)
  res.end();
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
