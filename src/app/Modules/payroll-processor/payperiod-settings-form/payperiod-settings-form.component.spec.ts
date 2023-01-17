import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayperiodSettingsFormComponent } from './payperiod-settings-form.component';

describe('PayperiodSettingsFormComponent', () => {
  let component: PayperiodSettingsFormComponent;
  let fixture: ComponentFixture<PayperiodSettingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayperiodSettingsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayperiodSettingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
