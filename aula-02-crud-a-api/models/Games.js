// MODEL DE GAMES 
// IMPORTANDO O MONGOOSE 
import mongoose from "mongoose";

// criando p schema de games 
const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    platform: String,
    price: Number
})

const Game = mongoose.model('Game', gameSchema)

export default Game;