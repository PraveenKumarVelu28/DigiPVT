import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateNetPayDetailsComponent } from './validate-net-pay-details.component';

describe('ValidateNetPayDetailsComponent', () => {
  let component: ValidateNetPayDetailsComponent;
  let fixture: ComponentFixture<ValidateNetPayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateNetPayDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateNetPayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
