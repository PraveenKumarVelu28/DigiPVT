import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewfolderComponentComponent } from './newfolder-component.component';

describe('NewfolderComponentComponent', () => {
  let component: NewfolderComponentComponent;
  let fixture: ComponentFixture<NewfolderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewfolderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfolderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});