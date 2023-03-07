import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstaffovertimedetailsComponent } from './allstaffovertimedetails.component';

describe('AllstaffovertimedetailsComponent', () => {
  let component: AllstaffovertimedetailsComponent;
  let fixture: ComponentFixture<AllstaffovertimedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllstaffovertimedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllstaffovertimedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
