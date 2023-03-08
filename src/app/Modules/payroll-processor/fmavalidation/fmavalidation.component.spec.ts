import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FMAValidationComponent } from './fmavalidation.component';

describe('FMAValidationComponent', () => {
  let component: FMAValidationComponent;
  let fixture: ComponentFixture<FMAValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FMAValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FMAValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
