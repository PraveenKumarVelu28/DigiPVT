import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LookandfeeldashComponent } from './lookandfeeldash.component';

describe('LookandfeeldashComponent', () => {
  let component: LookandfeeldashComponent;
  let fixture: ComponentFixture<LookandfeeldashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookandfeeldashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookandfeeldashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});