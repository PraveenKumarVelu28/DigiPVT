import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedTandLDetailsComponent } from './validated-tand-ldetails.component';

describe('ValidatedTandLDetailsComponent', () => {
  let component: ValidatedTandLDetailsComponent;
  let fixture: ComponentFixture<ValidatedTandLDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedTandLDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedTandLDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
