import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBatchMasterComponent } from './employee-batch-master.component';

describe('EmployeeBatchMasterComponent', () => {
  let component: EmployeeBatchMasterComponent;
  let fixture: ComponentFixture<EmployeeBatchMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeBatchMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeBatchMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
