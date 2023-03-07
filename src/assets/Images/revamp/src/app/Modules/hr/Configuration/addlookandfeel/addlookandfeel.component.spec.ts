import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddlookandfeelComponent } from './addlookandfeel.component';

describe('AddlookandfeelComponent', () => {
  let component: AddlookandfeelComponent;
  let fixture: ComponentFixture<AddlookandfeelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlookandfeelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlookandfeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});