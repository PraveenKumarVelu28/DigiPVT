import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubsidaryformComponent } from './subsidaryform.component';

describe('SubsidaryformComponent', () => {
  let component: SubsidaryformComponent;
  let fixture: ComponentFixture<SubsidaryformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsidaryformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsidaryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});