const mongoose = require("mongoose");
require("../db/connection");//Minha conexão com bd

//model
require("../models/Produtos");
const Produtos = mongoose.model("produtos");
require("../models/Feedback");
const Feedback = mongoose.model("feedback");

//Produtos
const MostrandoProdutos = async (req, res) => {
    const produtosResponse = await Produtos.find();
    const produtosJson = await produtosResponse;
  
    res.json(produtosJson);
  };

//feedback
 const EnviandoDados= async(req, res) => {
    const novosFeedback = new Feedback({
      nome: req.body.nome,
      msg: req.body.msg,
      numero: req.body.numero,
    });
    novosFeedback.save();
   /* res.json({
      message: "Usuario Cadastrado com sucesso!", // test no insonia
      usuario:  novosFeedback,
    })*/ 
}

const MostrarFeedback= async(req,res)=>{
    const feedbackResponse = await Feedback.find();
    const  feedbackJson = await feedbackResponse ;
    res.json(feedbackJson);
}

module.exports={
    MostrandoProdutos,
    EnviandoDados,
    MostrarFeedback
};
