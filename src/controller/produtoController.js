// essa classe é responsável por definir os métodos que serão executados quando uma requisição for feita para a rota '/produtos'
// aqui temos a descrição de cada método:
// buscarTodos: método responsável por buscar todos os produtos
// buscarPorId: método responsável por buscar um produto pelo 'id'
// buscarPorNome: método responsável por buscar um produto pelo 'nome'
// buscarPorCategoria: método responsável por buscar um produto pela 'categoria'
// criar: método responsável por criar um novo produto
// atualizar: método responsável por atualizar um produto pelo 'id'
// excluir: método responsável por excluir um produto pelo 'id'

const ProdutoRepository = require("../repositories/produtoRepository");

const produtoRepository = new ProdutoRepository();

class ProdutoController {
  async buscarTodos(req, res) {
    try {
      const produtos = await produtoRepository.buscarTodos();
      res.status(200).send(produtos);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Erro ao buscar todos os produtos" });
    }
  }
  async buscarPorId(req, res) {
    try {
      const id = req.params.id;
      const produto = await produtoRepository.buscarPorId(id);
      res.status(200).send(produto);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Erro ao buscar o produto" });
    }
  }

  async buscarPorNome(req, res) {
    try {
      const nome = req.params.nome;
      const produto = await produtoRepository.buscarPorNome(nome);
      res.status(200).send(produto);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Erro ao buscar o produto" });
    }
  }

  async buscarPorCategoria(req, res) {
    try {
      const categoria = req.params.categoria;
      const produto = await produtoRepository.buscarPorCategoria(categoria);
      res.status(200).send(produto);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Erro ao buscar o produto" });
    }
  }

  async criar(req, res) {
    try {
      const produto = req.body;
      const produtoCriado = await produtoRepository.criar(produto);
      res.status(201).send(produtoCriado);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Erro ao criar o produto" });
    }
  }

  async atualizar(req, res) {
    try {
      const id = req.params.id;
      const produto = req.body;
      const produtoAtualizado = await produtoRepository.atualizar(id, produto);
      res.status(200).send(produtoAtualizado);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Erro ao atualizar o produto" });
    }
  }

  async excluir(req, res) {
    try {
      const id = req.params.id;
      const produto = await produtoRepository.excluir(id);
      res.status(200).send(produto);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Erro ao excluir o produto" });
    }
  }
}

module.exports = ProdutoController;
