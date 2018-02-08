import { Component, Input, Output, EventEmitter, IterableDiffers } from '@angular/core';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html'
})
export class CellComponent {
  @Input() players: string[];
  @Input() values: number[];
  @Input() currentPlayer: string;
  @Input() winnerFound: boolean;
  @Input() index: number;
  @Output() cellValue: EventEmitter<number> = new EventEmitter<number>();

  public value: number;
  public displayValue: string;
  private iterableDiffer: any;

  constructor(private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  public outputValue(): void {
    if (this.value || this.winnerFound) {
      return;
    }

    if (this.currentPlayer === this.players[0]) {
      this.value = 1;
      this.displayValue = 'X';
    } else {
      this.value = -1;
      this.displayValue = 'O';
    }

    this.cellValue.emit(this.value);
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.values);
    if (changes && !changes.length) {
      this.value = null;
      this.displayValue = null;
    }
  }
}
