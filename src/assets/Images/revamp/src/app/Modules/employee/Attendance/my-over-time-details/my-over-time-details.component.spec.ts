import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyOverTimeDetailsComponent } from './my-over-time-details.component';

describe('MyOverTimeDetailsComponent', () => {
  let component: MyOverTimeDetailsComponent;
  let fixture: ComponentFixture<MyOverTimeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOverTimeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOverTimeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});