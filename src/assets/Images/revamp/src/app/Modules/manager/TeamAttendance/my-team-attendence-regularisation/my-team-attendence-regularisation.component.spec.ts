import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyTeamAttendenceRegularisationComponent } from './my-team-attendence-regularisation.component';

describe('MyTeamAttendenceRegularisationComponent', () => {
  let component: MyTeamAttendenceRegularisationComponent;
  let fixture: ComponentFixture<MyTeamAttendenceRegularisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamAttendenceRegularisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamAttendenceRegularisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});