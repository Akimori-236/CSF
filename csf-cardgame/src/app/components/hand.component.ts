import { Component, Input, Output } from '@angular/core';
import { DiscardInfo, Hand } from './models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent {

  // ! to dismiss error checking as deck will be initialised later
  @Input()
  hand!: Hand

  @Output()
  onDiscard = new Subject<DiscardInfo>

  // click action will call this
  discard(index: number) {
    console.info(`discarding card no. ${index}`)
    this.onDiscard.next({
      player: this.hand.player,
      cardNum: index
    })
  }
}
