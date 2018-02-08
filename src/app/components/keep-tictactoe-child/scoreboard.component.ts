import { Component, Input, Output, EventEmitter, IterableDiffers } from '@angular/core';

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
})
export class ScoreboardComponent {
  @Input() score: number[];
  @Input() players: string[];

  private iterableDiffer: any;

  constructor(private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.score);
    if (changes) {
      this.score = changes.collection;
    }
  }

}
