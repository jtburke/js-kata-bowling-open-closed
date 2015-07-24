import BowlingGame from './bowling-game.js'

export default class BowlingGameFactory {
    constructor() {
        
    }

    create() {
        return new BowlingGame()
    }
}