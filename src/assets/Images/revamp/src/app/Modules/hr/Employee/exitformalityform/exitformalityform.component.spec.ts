import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExitformalityformComponent } from './exitformalityform.component';

describe('ExitformalityformComponent', () => {
  let component: ExitformalityformComponent;
  let fixture: ComponentFixture<ExitformalityformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitformalityformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitformalityformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});