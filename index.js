const express = require ("express");
const cors = require ("cors");
const auth = require ("./middleware/jwt_token")
const banco = require("./models/banco")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

const url = "mongodb+srv://carolina:aluna1234@projetombafinal.9hao4.mongodb.net/ProjetoMbaFinal?retryWrites=true&w=majority"

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})


app.post("/api/cliente/add", auth,(req,res)=>{

    conn.query("insert into tbcliente set?", req.body,(error, result, fields)=>{
        if(error){
            return res.status(400).send({output: `Não foi possivel cadastrar -> ${error}`})
        }
        res.status(201).send({output: `Cliente cadastrado`, payload:result})
    })

})

app.put("/api/cliente/update/:id",auth,(req,res)=>{

    conn.query("update tbcliente set? where idcliente=?",[req.body,req.params.id], (error,result)=>{
        if(error){
            return res.status(400)({output: `Não foi possivel atualizar -> ${error}`})
        }
        res.status(200).send({output:result})

    })


})

app.listen(5533,()=>console.log("Sevidor online em http://localhost:5533"));