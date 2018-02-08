import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CellComponent } from './cell.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Cell Container', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CellComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should be defined', () => {
    const fixture = TestBed.createComponent(CellComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeDefined();
  });

  it('should output value when clicked', () => {
    const fixture = TestBed.createComponent(CellComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.players = ['user1', 'user2'];
    comp.currentPlayer = 'user1';
    spyOn(comp.cellValue, 'emit');
    comp.outputValue();
    expect(comp.value).toBe(1);
    expect(comp.cellValue.emit).toHaveBeenCalled();
  })

});
