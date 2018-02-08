import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html'
})
export class CellComponent {
  @Input() players: string[];
  @Input() currentPlayer: string;
  @Input() index: number;
  @Output() cellValue: EventEmitter<string> = new EventEmitter<string>();

  public value: string;

  public outputValue(): void {
    if (this.value) {
      return;
    }

    if (this.currentPlayer === this.players[0]) {
      this.value = 'x'
    } else {
      this.value = 'o';
    }

    this.cellValue.emit(this.value);
  }
}
