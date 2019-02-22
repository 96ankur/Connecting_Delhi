import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DCBdetailsComponent } from './dcbdetails.component';

describe('DCBdetailsComponent', () => {
  let component: DCBdetailsComponent;
  let fixture: ComponentFixture<DCBdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DCBdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DCBdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
