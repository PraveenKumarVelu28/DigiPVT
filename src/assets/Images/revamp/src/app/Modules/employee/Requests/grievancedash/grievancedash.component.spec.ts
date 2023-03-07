import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrievancedashComponent } from './grievancedash.component';

describe('GrievancedashComponent', () => {
  let component: GrievancedashComponent;
  let fixture: ComponentFixture<GrievancedashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrievancedashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievancedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});