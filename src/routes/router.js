// aqui definimos as rotas da nossa aplicação e as chamadas para os métodos do controller
// usamos o express.Router() para criar um objeto router que será usado para definir as rotas
// usamos o router.get() para definir uma rota para o método GET
// usamos o router.post() para definir uma rota para o método POST
// usamos o router.put() para definir uma rota para o método PUT
// usamos o router.delete() para definir uma rota para o método DELETE
// usamos o router para definir as rotas e o controller para definir os métodos que serão chamados para cada rota

const express = require("express");
const produtoController = require("../controller/produtoController");
const router = express.Router();

const controller = new produtoController();

router.get("/produto", controller.buscarTodos);

router.get("/produto/:id", controller.buscarPorId);

router.get("/produto/nome/:nome", controller.buscarPorNome);

router.get("/produto/categoria/:categoria", controller.buscarPorCategoria);

router.post("/produto", controller.criar);

router.put("/produto/:id", controller.atualizar);

router.delete("/produto/:id", controller.excluir);

module.exports = router;
