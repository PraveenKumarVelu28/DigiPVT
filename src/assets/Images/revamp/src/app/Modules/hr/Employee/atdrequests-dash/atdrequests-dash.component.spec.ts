import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ATDRequestsDashComponent } from './atdrequests-dash.component';

describe('ATDRequestsDashComponent', () => {
  let component: ATDRequestsDashComponent;
  let fixture: ComponentFixture<ATDRequestsDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ATDRequestsDashComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATDRequestsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});