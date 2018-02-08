import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { KeepTicTacToeContainerComponent} from './keep-TicTacToe.container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Keep TicTacToe Container', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        KeepTicTacToeContainerComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should be defined', () => {
    const fixture = TestBed.createComponent(KeepTicTacToeContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeDefined();
  });

  it('should update value', () => {
    const fixture = TestBed.createComponent(KeepTicTacToeContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.updateValue(1, 0)
    expect(comp.values[0]).toBe(1);
  });

  it('should check win', () => {
    const fixture = TestBed.createComponent(KeepTicTacToeContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.values = [1,1,1]
    comp.updateValue(4, -1);
    expect(comp.winnerFound).toBeTruthy();
  });

  it('should restart game', () => {
    const fixture = TestBed.createComponent(KeepTicTacToeContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.values = [1,1,1,1]
    comp.winnerFound = true;
    comp.playableCells = 0;
    comp.restart();
    expect(comp.values.length).toBe(0);
    expect(comp.winnerFound).toBeFalsy();
    expect(comp.playableCells).toBe(9);
  })
});
