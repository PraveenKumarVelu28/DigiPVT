import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffsalarydashComponent } from './staffsalarydash.component';

describe('StaffsalarydashComponent', () => {
  let component: StaffsalarydashComponent;
  let fixture: ComponentFixture<StaffsalarydashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffsalarydashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsalarydashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});