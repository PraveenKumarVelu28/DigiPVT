import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeloandashComponent } from './employeeloandash.component';

describe('EmployeeloandashComponent', () => {
  let component: EmployeeloandashComponent;
  let fixture: ComponentFixture<EmployeeloandashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeloandashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeloandashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});