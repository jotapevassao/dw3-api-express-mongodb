// Controller de games
// O controller tratará as requisições do cliente
// Importando o service
import gameService from '../services/gameService.js';
import { ObjectId } from 'mongodb'
// Função que irá tratar a requisição para LISTAR os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll()
        res.status(200).json({ games: games })
        // Cod. 200 - OK - Requisição feita com sucesso
    } catch (error) {
        console.log(error)
        // Tratando a resposta que api irá enviar em caso de erro
        res.status(500).json({ error: 'Ocorreu um erro ao listar os jogos. Erro interno do servidor.' })
    }
}
// Função que irá tratar a requisição para CADASTRAR os jogos
const createGame = async(req, res) => {
    try {
        // const title = req.body.title
        // const year = req. body.year
        // Coletando dados enviados (formulário, requisições, etc) e gravaando nas variáveis
        const {title, year, platform, price} = req.body
        // Enviando dados para o Service cadastrar
        await gameService.Create(title, year, platform, price);
        res.status(201).json({message: "Jogo cadastrado com sucesso!"})
        // Cod. 201 (CREATD) -> Recurso criado com sucesso no servidor
    } catch(error) {
        console.log(error);
        res.status(500).json({error:"Erro interno do servidor."})
    }
}

const deleGame = async (req, res ) => {
    try { 
        const id = req.params.id;
        if (ObjectId.isValid(id)) {
            await gameService.Delete(id);
            res.sendStatus(204)
            // Cod. 204 (no content ) : Requisiçao bem sucedida, porem nao ha conteudo para retornar.
        
        } else { 
            res.status(400).json({ error : 'requisiçao mal formada, id invalido.'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro interno do servidor.'})
    }
}
// Exportando as funções
export default { getAllGames, createGame }