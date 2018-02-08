import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keep-tictactoe-container',
  templateUrl: './keep-TicTacToe.container.component.html'
})
export class KeepTicTacToeContainerComponent implements OnInit {
  public values: number[];
  public players = [];
  public currentPlayer: string;

  ngOnInit(): void {
    this.players[0] = prompt('Enter name for player 1');
    this.players[1] = prompt('Enter name for player 2');
    this.currentPlayer = this.players[0];
  }
}
