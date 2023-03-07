import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotPunchedInReportComponent } from './not-punched-in-report.component';

describe('NotPunchedInReportComponent', () => {
  let component: NotPunchedInReportComponent;
  let fixture: ComponentFixture<NotPunchedInReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotPunchedInReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotPunchedInReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});