import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloordashComponent } from './floordash.component';

describe('FloordashComponent', () => {
  let component: FloordashComponent;
  let fixture: ComponentFixture<FloordashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloordashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloordashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});