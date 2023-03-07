import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeebenfitsmasteraddComponent } from './employeebenfitsmasteradd.component';

describe('EmployeebenfitsmasteraddComponent', () => {
  let component: EmployeebenfitsmasteraddComponent;
  let fixture: ComponentFixture<EmployeebenfitsmasteraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeebenfitsmasteraddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeebenfitsmasteraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});