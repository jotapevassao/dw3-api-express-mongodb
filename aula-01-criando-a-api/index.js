// Importar o Express
import express from "express";
// importar o mongoose
import mongoose from "mongoose"
// importar o model
import Game from "./models/Games.js"

// Carregando EXpress
const app = express();

// Configurações do Express
app.use(express.json());

// ROTA PRNCIPAL DA API
app.get("/", (req, res )=>{
    //JSON QUE SERA RETORNADO PELA  API
    const games = [
        {
            title: "fifa 2019",
            year: 2019,
            platform: "X-box 360",
            price:198
        },
        {
            title: "the Sims",
            year: 2016,
            platform: "PC (windows)",
            price: 149
        },
        {
            title: "CS GO",
            year:2012,
            platform: "PC (Windows)",
            price: 89,
        }
    ]
    // Configura o retorno do APi
    res.status(200).json(games)
    
});

  //ROTA filmes 
//app.get("/filmes", (req, res) => {
//const  filmes = [
   // {
  //      title: "logan",
    //    genre: "acao",
      //  duration: "120",
   // }
//]
 //res.json(filmes);
//});

// Iniciado  a conexão  com mongo db
 mongoose.connect("mongodb://127.0.0.1:27017/apithegames")
// Iniciando o servidor a api
const port = 4000;
app.listen(port, (error) => {
    if (error) {
        console.log("Ocorreu um erro ao iniciar a API!" + error);
    } else {
        console.log("API iniciando com sucesso na porta" + port);
    }
});