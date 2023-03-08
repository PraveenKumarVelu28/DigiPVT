import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollAdminComponent } from './payroll-admin.component';

describe('PayrollAdminComponent', () => {
  let component: PayrollAdminComponent;
  let fixture: ComponentFixture<PayrollAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
