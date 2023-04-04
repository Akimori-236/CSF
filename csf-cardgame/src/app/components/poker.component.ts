import { Component, Input, OnInit } from '@angular/core';
import { Card, Deck, DiscardInfo as DiscardInfo, Hand } from './models';

const PLAYERS = ["Harry", "Ron", "Hermione", "Ginny"]

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.css']
})
export class PokerComponent implements OnInit {


  // ! to dismiss error checking as deck will be initialised later
  deck!: Deck
  players: Hand[] = []
  discardPile: Card[] = []

  @Input()
  noOfPlayers: number = 4

  ngOnInit(): void {
    // initialise deck and shuffle
    this.deck = new Deck()
    this.deck.shuffle()

    // init players hands
    for (let player of PLAYERS) {
      this.players.push({
        player: player,
        cards: this.deck.draw(5)
      })
    }
  }

  // receiving end of discard event from <app-hand>
  discard(event: DiscardInfo) {
    const player = this.players.find(val => val.player == event.player)
    let c: Card | undefined = player?.cards?.splice(event.cardNum, 1)[0]
    //put discarded card in discard pile
    if (c != undefined) {
      this.discardPile.push(c);
    }
  }

}
