import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedFMADetailsComponent } from './validated-fmadetails.component';

describe('ValidatedFMADetailsComponent', () => {
  let component: ValidatedFMADetailsComponent;
  let fixture: ComponentFixture<ValidatedFMADetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedFMADetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedFMADetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
