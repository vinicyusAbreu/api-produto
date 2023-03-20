// criando o servidor web com express e usamos o connectDB para conectar ao banco de dados
// servidor está configurado para utilizar o express.json() para poder receber json no body das requisições
// servidor está configurado para utilizar a porta 3000
// servidor está configurado para utilizar o router para as rotas

const express = require("express");
const app = express();

const connectDB = require("../config/db");

connectDB();

app.use(express.json());

const PORT = 3000;

const router = require("./routes/router");

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
