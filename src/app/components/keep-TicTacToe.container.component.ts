import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'keep-tictactoe-container',
  templateUrl: './keep-TicTacToe.container.component.html'
})
export class KeepTicTacToeContainerComponent implements OnInit {
  public values = [];
  public players = [];
  public currentPlayer: string;
  public winnerFound: boolean;
  public winner: string;
  public playableCells = 9;
  public moves = [];
  public score = [];

  constructor() {
    Observable.interval(15000).subscribe(x => {
      
    });
  }

  public updateValue(value, index): void {
    this.values[index] = value;
    this.playableCells--;
    this.moves.push(`${this.currentPlayer} takes square ${index + 1}`)

    if (this.checkWin()) {
      this.updateScore();
      this.moves.push(`${this.winner} wins this round`);
		}

    if (this.playableCells === 0) {
      this.score[2] = this.score[2] + 1;
      this.moves.push('No more moves');
    }

    this.updatePlayer();
  }

  public updateScore(): void {
    if (this.winner === this.players[0]) {
      this.score[0] = this.score[0] + 1;
    }

    if (this.winner === this.players[1]) {
      this.score[1] = this.score[1] + 1;
    }
  }

  public updatePlayer(): void {
    if (this.currentPlayer === this.players[0]) {
      this.currentPlayer = this.players[1];
    } else {
      this.currentPlayer = this.players[0];
    }
  }

  public checkWin(): boolean {
    let row1, row2, row3, col1, col2, col3, diag1, diag2;
    row1 = this.values[0] + this.values[1] + this.values[2];
    row2 = this.values[3] + this.values[4] + this.values[5];
    row3 = this.values[6] + this.values[7] + this.values[8];
    col1 = this.values[0] + this.values[3] + this.values[6];
    col2 = this.values[1] + this.values[4] + this.values[7];
    col3 = this.values[2] + this.values[5] + this.values[8];
    diag1 = this.values[0] + this.values[4] + this.values[8];
    diag2 = this.values[2] + this.values[4] + this.values[6];

    this.checkRows(row1, row2, row3);
    this.checkColumns(col1, col2, col3);
    this.checkDiagonals(diag1, diag2);
    return this.winnerFound;
  }

  public checkRows(row1, row2, row3): void {
  	if (row1 === 3 || row2 === 3 || row3 === 3) {
  		this.winnerFound = true;
  		this.winner = this.players[0];
  	} else if (row1 === -3 || row2 === -3 || row3 === -3) {
  		this.winnerFound = true;
  		this.winner = this.players[1];
  	}
  };

  public checkColumns(col1, col2, col3): void {
  	if (col1 === 3 || col2 === 3 || col3 === 3) {
  		this.winnerFound = true;
  		this.winner = this.players[0];
  	} else if (col1 === -3 || col2 === -3 || col3 === -3) {
  		this.winnerFound = true;
  		this.winner = this.players[1];
  	}
  };

  public checkDiagonals(diag1, diag2): void {
  	if (diag1 === 3 || diag2 === 3) {
  		this.winnerFound = true;
  		this.winner = this.players[0];
  	} else if (diag1 === -3 || diag2 === -3) {
  		this.winnerFound = true;
  		this.winner = this.players[1];
  	}
  };

  public restart(): void {
    this.values = [];
    //this.currentPlayer: string;
    this.winnerFound = false;
    this.winner = '';
    this.playableCells = 9;
    this.moves = [];
  }

  public ngOnInit(): void {
    this.players[0] = prompt('Enter name for player 1');
    this.players[1] = prompt('Enter name for player 2');
    this.currentPlayer = this.players[0];
    this.score[0] = 0;
    this.score[1] = 0;
    this.score[2] = 0;
  }
}
