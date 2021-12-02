const mongoose = require("mongoose");

const tabela_banco = mongoose.Schema({
  
  id: {type:String},
  username: {type:String},
  type: {type:String},
  proprietario: {type:String},
  limite_Cartão: {type:Number}


})

module.exports = tabela_banco;