// Aqui usamos o mongoose para conectar ao banco de dados
// Usamos o config para pegar a url do banco de dados, essa url está no arquivo default.json
// Usamos o async await para esperar a conexão com o banco de dados
// Se der erro, mostramos o erro e saimos do processo
// e exportamos a função connectDB para ser usada no server.js

const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURL");

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB conectado...");
  } catch (erro) {
    console.log(erro.message);
    process.exit(1);
  }
};

module.exports = connectDB;
