import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollComponentBulkUploadComponent } from './payroll-component-bulk-upload.component';

describe('PayrollComponentBulkUploadComponent', () => {
  let component: PayrollComponentBulkUploadComponent;
  let fixture: ComponentFixture<PayrollComponentBulkUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollComponentBulkUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollComponentBulkUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
