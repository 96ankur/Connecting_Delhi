import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiCantonmentBoardComponent } from './delhi-cantonment-board.component';

describe('DelhiCantonmentBoardComponent', () => {
  let component: DelhiCantonmentBoardComponent;
  let fixture: ComponentFixture<DelhiCantonmentBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelhiCantonmentBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiCantonmentBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
