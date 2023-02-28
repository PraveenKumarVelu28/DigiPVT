import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedNewHiresDetailsComponent } from './validated-new-hires-details.component';

describe('ValidatedNewHiresDetailsComponent', () => {
  let component: ValidatedNewHiresDetailsComponent;
  let fixture: ComponentFixture<ValidatedNewHiresDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedNewHiresDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedNewHiresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
