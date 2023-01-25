const express = require("express");

const app = express();
app.use(express.json());
/**
 * GET = Buscar
 * POST = Salvar
 * PUT = Alterar
 * DELETE = Deletar
 * PATCH = Alteração específica
 */

/**
 * Tipos de parâmetros:
 *
 * Route Params => Identificar um recurso editar/deletar/buscar
 * Query Params => Paginação, filtros, ordenação
 * Body Params => Objetos para criação ou alteração de um registro
 *
 */
app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 4"]);
});

app.listen(3333);
