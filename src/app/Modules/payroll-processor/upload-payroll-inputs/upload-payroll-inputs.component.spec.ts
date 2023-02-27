import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPayrollInputsComponent } from './upload-payroll-inputs.component';

describe('UploadPayrollInputsComponent', () => {
  let component: UploadPayrollInputsComponent;
  let fixture: ComponentFixture<UploadPayrollInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPayrollInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPayrollInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
