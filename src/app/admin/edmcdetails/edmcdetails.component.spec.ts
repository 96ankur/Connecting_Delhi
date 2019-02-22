import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDMCdetailsComponent } from './edmcdetails.component';

describe('EDMCdetailsComponent', () => {
  let component: EDMCdetailsComponent;
  let fixture: ComponentFixture<EDMCdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDMCdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDMCdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
