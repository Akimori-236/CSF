import { Component, OnInit } from '@angular/core';
import { GameService } from '../GameService';
import { Game } from '../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  // @Autowired private GameService gameSvc;
  constructor(private gameSvc: GameService) { }

  gameList: Game[] = []
  gameSub!: Subscription

  ngOnInit(): void {
    // sub to service
    this.gameSub = this.gameSvc.onGames.subscribe(
      response => this.gameList = response
    )
  }
}