# API de Produtos

Esta é uma API de produtos criada para a aula de Laboratório de Desenvolvimento de Aplicativos Nativos. A API permite que os usuários possam visualizar, adicionar, atualizar e excluir produtos.

## Instalação

Para utilizar esta API, siga os seguintes passos:

<ol>
    <li>Clone este repositório em seu computador: git clone https://github.com/seu-usuario/api-produtos.git</li>
    <li>Entre na pasta do projeto: cd api-produtos</li>
    <li>Instale as dependências: npm install</li>
    <li>Execute o projeto: npm start</li>
</ol>

## Endpoints

A API possui os seguintes endpoints:

### GET /produto

Retorna uma lista de todos os produtos cadastrados na API.

### GET /produto/:id

Retorna um produto específico, com base no seu ID.

### GET /produto/nome/:nome

Retorna um produto específico, com base no seu nome.

### GET /produto/categoria/:categoria

Retorna uma lista de produtos, com base na categoria.

### POST /produto

Cria um novo produto na API. O corpo da requisição deve incluir as informações do produto a ser criado.

### PUT /produto/:id

Atualiza um produto existente na API. O corpo da requisição deve incluir as informações atualizadas do produto.

### DELETE /produto/:id

Exclui um produto da API, com base no seu ID.

## Exemplo de Uso

### GET /produto

Retorna todos os produtos cadastrados na API:

```bash
GET http://localhost:3000/produto
```

### GET /produto/:id

Retorna um produto específico, com base no seu ID:

```bash
GET http://localhost:3000/produto/1
```

### GET /produto/nome/:nome

Retorna produtos específicos, com base no seu nome:

```bash
GET http://localhost:3000/produto/nome/Camisa
```

### GET /produto/categoria/:categoria

Retorna produtos específicos, com base na categoria:

```bash
GET http://localhost:3000/produto/categoria/Roupas
```

### POST /produto

Cria um novo produto na API:

```bash
POST http://localhost:3000/produto
```

```json
{
  "nome": "Calça Jeans",
  "descricao": "Calça Jeans masculina",
  "preco": 99.99,
  "quantidade": 5,
  "categoria": "Roupas",
  "sku": "DEF456"
}
```

### PUT /produto/:id

Atualiza um produto existente na API:

```bash
    PUT http://localhost:3000/produto/1
```

```json
{
  "nome": "Camiseta"
}
```

### DELETE /produto/:id

Exclui um produto da API:

```bash
DELETE http://localhost:3000/produto/1
```

## Autor

- **Vinicius de Abreu Massena** - [vinicyusAbreu](https://github.com/vinicyusAbreu)
