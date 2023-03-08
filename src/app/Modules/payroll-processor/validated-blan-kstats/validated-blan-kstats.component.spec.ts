import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedBlanKStatsComponent } from './validated-blan-kstats.component';

describe('ValidatedBlanKStatsComponent', () => {
  let component: ValidatedBlanKStatsComponent;
  let fixture: ComponentFixture<ValidatedBlanKStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedBlanKStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedBlanKStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
