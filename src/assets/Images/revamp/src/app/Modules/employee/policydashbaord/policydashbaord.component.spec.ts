import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PolicydashbaordComponent } from './policydashbaord.component';

describe('PolicydashbaordComponent', () => {
  let component: PolicydashbaordComponent;
  let fixture: ComponentFixture<PolicydashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicydashbaordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicydashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});