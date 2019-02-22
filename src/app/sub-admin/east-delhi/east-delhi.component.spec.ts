import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EastDelhiComponent } from './east-delhi.component';

describe('EastDelhiComponent', () => {
  let component: EastDelhiComponent;
  let fixture: ComponentFixture<EastDelhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EastDelhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EastDelhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
