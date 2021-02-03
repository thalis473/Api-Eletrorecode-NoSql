const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//criação da minha tabela Feedback

const Feedback = new Schema({
    nome:{
        type: String,
        required: true,
        maxlength: 15,
        minlength: 3
      },
    msg:{
        type: String,
        required: true,
      },
    data:{
        type: Date,
        default:Date.now(),
        required: true,
      },
    numero:{
        type: Number,
        required: true,
      },
})

mongoose.model("feedback", Feedback);