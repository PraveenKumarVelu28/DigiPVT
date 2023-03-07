import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContradictiondashComponent } from './contradictiondash.component';

describe('ContradictiondashComponent', () => {
  let component: ContradictiondashComponent;
  let fixture: ComponentFixture<ContradictiondashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContradictiondashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContradictiondashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});