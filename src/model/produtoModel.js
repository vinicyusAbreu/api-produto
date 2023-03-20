// Aqui definimos o modelo de dados do produto
// modelo de dados é definido usando o mongoose.Schema
// o schema possui os campos: nome, descricao, preco, quantidade, categoria e sku
// o campo _id é definido como String e recebe um valor gerado pelo uuidv4
// o campo sku é definido como String e recebe um valor único
// o campo nome é definido como String e recebe um valor obrigatório
// o campo descricao é definido como String e recebe um valor obrigatório
// o campo preco é definido como Number e recebe um valor obrigatório
// o campo quantidade é definido como Number e recebe um valor obrigatório
// o campo categoria é definido como String e recebe um valor obrigatório
// o campo sku é definido como String e recebe um valor obrigatório
// o campo createdAt é definido como Date e recebe um valor obrigatório
// o campo updatedAt é definido como Date e recebe um valor obrigatório

const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const ProdutoSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    nome: {
      type: String,
      required: true,
      trim: true,
    },
    descricao: {
      type: String,
      required: true,
      trim: true,
    },
    preco: {
      type: Number,
      required: true,
      min: 0,
    },
    quantidade: {
      type: Number,
      required: true,
      min: 0,
    },
    categoria: {
      type: String,
      required: true,
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProdutoModel = mongoose.model("Produto", ProdutoSchema);

module.exports = ProdutoModel;
