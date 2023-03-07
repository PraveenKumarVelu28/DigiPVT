import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocaterReportsComponent } from './locater-reports.component';

describe('LocaterReportsComponent', () => {
  let component: LocaterReportsComponent;
  let fixture: ComponentFixture<LocaterReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaterReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaterReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});