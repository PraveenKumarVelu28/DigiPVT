import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplyOtComponent } from './apply-ot.component';

describe('ApplyOtComponent', () => {
  let component: ApplyOtComponent;
  let fixture: ComponentFixture<ApplyOtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyOtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyOtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});