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
    // método para excluir um jogo
    async Delete(id) {
        try {
             await Game.findByIdAndDelete(id)
             // o metodo findbyidDelete () do monsoose busca um registro pela id  e delete 
             console.log(`O jogo com a id ${id } foi deletado`)
        }catch (error) {
            console.log(error)
        }
    }
    // encerra a classe 
}
// Exportando a classe
export default new gameService()

