export interface Card {
    suit: string
    value: number
}

export interface Hand {
    player: string
    cards: Card[]
}

export interface DiscardInfo {
    player: string
    cardNum: number
}

export const SUITS = ["clover", "diamond", "heart", "spade"]

export class Deck {
    deck: Card[] = []

    constructor(noOfPacks = 1) {
        for (let c = 0; c < noOfPacks; c++) {
            for (let suit of SUITS) {
                for (let i = 1; i <= 13; i++) {
                    this.deck.push({
                        suit: suit,
                        value: i
                    })
                }
            }
        }
    }
    shuffle() {
        for (let i = 0, deckSize = this.deck.length; i < deckSize; i++) {
            let rand = (Math.random() * deckSize) | 0
            let randCard = this.deck[rand]
            this.deck[rand] = this.deck[i]
            this.deck[i] = randCard
        }
    }

    draw(count = 1): Card[] {
        return this.deck.splice(0, count)
    }
}