import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenefirsenrollmetdashComponent } from './benefirsenrollmetdash.component';

describe('BenefirsenrollmetdashComponent', () => {
  let component: BenefirsenrollmetdashComponent;
  let fixture: ComponentFixture<BenefirsenrollmetdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BenefirsenrollmetdashComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefirsenrollmetdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});