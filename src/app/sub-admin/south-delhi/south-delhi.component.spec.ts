import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthDelhiComponent } from './south-delhi.component';

describe('SouthDelhiComponent', () => {
  let component: SouthDelhiComponent;
  let fixture: ComponentFixture<SouthDelhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthDelhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthDelhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
