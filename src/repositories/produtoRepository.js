// Descrição: arquivo responsável pelas 'queries' da classe 'Produto'
// Utiliza o padrão de projeto 'Singleton' para garantir que haja apenas uma instância da classe 'ProdutoRepository'
// Importa o 'ProdutoModel' para realizar as 'queries' no banco de dados
// classe possui os métodos: buscarTodos, buscarPorId, buscarPorNome, buscarPorCategoria, criar, atualizar e excluir

const ProdutoModel = require("../model/produtoModel");

class ProdutoRepository {
  constructor() {
    if (!ProdutoRepository.instance) {
      ProdutoRepository.instance = this;
    }
    return ProdutoRepository.instance;
  }
  async buscarTodos() {
    return await ProdutoModel.find();
  }

  async buscarPorId(id) {
    return await ProdutoModel.findById(id);
  }

  async buscarPorNome(nome) {
    return await ProdutoModel.find({
      nome: { $regex: new RegExp(nome, "i") },
    });
  }

  async buscarPorCategoria(categoria) {
    return await ProdutoModel.find({
      categoria: { $regex: new RegExp(categoria, "i") },
    });
  }

  async criar(produto) {
    return await ProdutoModel.create(produto);
  }

  async atualizar(id, produto) {
    return await ProdutoModel.findByIdAndUpdate(id, produto, { new: true });
  }
  async excluir(id) {
    return await ProdutoModel.findByIdAndDelete(id);
  }
}

module.exports = ProdutoRepository;
