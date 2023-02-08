import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPayPeriodAllowanceComponent } from './upload-pay-period-allowance.component';

describe('UploadPayPeriodAllowanceComponent', () => {
  let component: UploadPayPeriodAllowanceComponent;
  let fixture: ComponentFixture<UploadPayPeriodAllowanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPayPeriodAllowanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPayPeriodAllowanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
