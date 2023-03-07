import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferemployeeComponent } from './transferemployee.component';

describe('TransferemployeeComponent', () => {
  let component: TransferemployeeComponent;
  let fixture: ComponentFixture<TransferemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
