import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDMCdetailsComponent } from './new-dmcdetails.component';

describe('NewDMCdetailsComponent', () => {
  let component: NewDMCdetailsComponent;
  let fixture: ComponentFixture<NewDMCdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDMCdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDMCdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
