import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubsidarydashboardComponent } from './subsidarydashboard.component';

describe('SubsidarydashboardComponent', () => {
  let component: SubsidarydashboardComponent;
  let fixture: ComponentFixture<SubsidarydashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsidarydashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsidarydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});