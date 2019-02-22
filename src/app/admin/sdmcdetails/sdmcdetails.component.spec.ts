import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SDMCdetailsComponent } from './sdmcdetails.component';

describe('SDMCdetailsComponent', () => {
  let component: SDMCdetailsComponent;
  let fixture: ComponentFixture<SDMCdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SDMCdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDMCdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
