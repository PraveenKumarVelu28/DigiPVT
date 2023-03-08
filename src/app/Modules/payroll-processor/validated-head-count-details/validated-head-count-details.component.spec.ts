import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedHeadCountDetailsComponent } from './validated-head-count-details.component';

describe('ValidatedHeadCountDetailsComponent', () => {
  let component: ValidatedHeadCountDetailsComponent;
  let fixture: ComponentFixture<ValidatedHeadCountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedHeadCountDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedHeadCountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
