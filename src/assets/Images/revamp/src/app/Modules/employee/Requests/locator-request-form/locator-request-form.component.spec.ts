import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocatorRequestFormComponent } from './locator-request-form.component';

describe('LocatorRequestFormComponent', () => {
  let component: LocatorRequestFormComponent;
  let fixture: ComponentFixture<LocatorRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocatorRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatorRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});