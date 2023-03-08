import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunPhilhealthValidationComponent } from './run-philhealth-validation.component';

describe('RunPhilhealthValidationComponent', () => {
  let component: RunPhilhealthValidationComponent;
  let fixture: ComponentFixture<RunPhilhealthValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunPhilhealthValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunPhilhealthValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
