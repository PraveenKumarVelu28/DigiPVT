import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollYTDUploadComponent } from './payroll-ytdupload.component';

describe('PayrollYTDUploadComponent', () => {
  let component: PayrollYTDUploadComponent;
  let fixture: ComponentFixture<PayrollYTDUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollYTDUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollYTDUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
