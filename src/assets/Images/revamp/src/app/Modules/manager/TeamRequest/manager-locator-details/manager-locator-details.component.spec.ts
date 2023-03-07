import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerLocatorDetailsComponent } from './manager-locator-details.component';

describe('ManagerLocatorDetailsComponent', () => {
  let component: ManagerLocatorDetailsComponent;
  let fixture: ComponentFixture<ManagerLocatorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerLocatorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerLocatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});