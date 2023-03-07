import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamShiftCorrectionComponent } from './my-team-shift-correction.component';

describe('MyTeamShiftCorrectionComponent', () => {
  let component: MyTeamShiftCorrectionComponent;
  let fixture: ComponentFixture<MyTeamShiftCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamShiftCorrectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamShiftCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
