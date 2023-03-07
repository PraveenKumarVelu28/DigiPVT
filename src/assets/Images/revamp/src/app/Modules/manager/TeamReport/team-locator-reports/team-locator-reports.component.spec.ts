import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamLocatorReportsComponent } from './team-locator-reports.component';

describe('TeamLocatorReportsComponent', () => {
  let component: TeamLocatorReportsComponent;
  let fixture: ComponentFixture<TeamLocatorReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamLocatorReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamLocatorReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});