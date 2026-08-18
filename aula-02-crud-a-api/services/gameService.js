// Serviços de Games
// Aqui será inserido os métodos para Ler, cadastrar, Alterar e Excluir games

// Importando o Model
import Game from "../models/Games.js"

class gameService {
    // Serviço/MÉTODO para ler os jogos
    async getAll() {
        // Tentativa da promessa (sucesso)
        try {
            //  o método .find() do mongoose busca registros
            const games = await Game.find()
            return games
            // Caso ocorra um erro será executado o catch
        } catch (error) {
            console.log(error)
        }
    }
    // MÉTODO PARA CADASTRAR JOGOS
    async Create(title, year, platform, price) {
        try {
            const newGame = new Game({
                // title : title, (Não precisa repetir duas vezes)
                title,
                year,
                platform,
                price
            })
            // Aguardar a operação de cadastro
            // .save() é o método do mongoose para cadastrar
            await newGame.save()
        } catch (error) {
            console.log(error)
        }
    }
}
// Exportando a classe
export default new gameService()

