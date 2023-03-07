import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ATDRequestsComponent } from './atdrequests.component';

describe('ATDRequestsComponent', () => {
  let component: ATDRequestsComponent;
  let fixture: ComponentFixture<ATDRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ATDRequestsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATDRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});