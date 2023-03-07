import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddstaffsalaryComponent } from './addstaffsalary.component';

describe('AddstaffsalaryComponent', () => {
  let component: AddstaffsalaryComponent;
  let fixture: ComponentFixture<AddstaffsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstaffsalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstaffsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});