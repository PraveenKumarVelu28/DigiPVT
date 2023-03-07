import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HrleavereuestComponent } from './hrleavereuest.component';

describe('HrleavereuestComponent', () => {
  let component: HrleavereuestComponent;
  let fixture: ComponentFixture<HrleavereuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrleavereuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrleavereuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});