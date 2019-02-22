import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthDMCdetailsComponent } from './north-dmcdetails.component';

describe('NorthDMCdetailsComponent', () => {
  let component: NorthDMCdetailsComponent;
  let fixture: ComponentFixture<NorthDMCdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthDMCdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthDMCdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
