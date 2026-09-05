// Importando o DNS
import dns from "dns";

// Importando o mongoose
import mongoose from "mongoose";

// Usando o DNS do Google
dns.setServers(["8.8.8.8"]);

// Usuário e senha do banco de dados
const dbUser = "joaopedrovassao_db_user";
const dbPassword = "9QqUEorkNPU48IHw";

const connect = () => {

    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ysgyg7f.mongodb.net/?appName=Cluster0`
    );

    const connection = mongoose.connection;

    connection.on("error", () => {
        console.log("Erro ao conectar com o mongoDB.");
    });

    connection.on("open", () => {
        console.log("Conectado ao mongoDB com sucesso!");
    });
};

connect();

export default mongoose;