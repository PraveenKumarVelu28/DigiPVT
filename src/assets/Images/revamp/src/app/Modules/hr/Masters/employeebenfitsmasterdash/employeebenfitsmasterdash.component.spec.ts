import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeebenfitsmasterdashComponent } from './employeebenfitsmasterdash.component';

describe('EmployeebenfitsmasterdashComponent', () => {
  let component: EmployeebenfitsmasterdashComponent;
  let fixture: ComponentFixture<EmployeebenfitsmasterdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeebenfitsmasterdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeebenfitsmasterdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
