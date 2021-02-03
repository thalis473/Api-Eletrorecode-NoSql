const express = require('express');
const routes = express.Router();
const Nosql = require("./src/controllers/index");

// produtos
routes.get("/produtos",Nosql.MostrandoProdutos) 
  
// Feedback
routes.post("/feedback",Nosql.EnviandoDados) 
routes.get("/feedback",Nosql.MostrarFeedback)

module.exports = routes;