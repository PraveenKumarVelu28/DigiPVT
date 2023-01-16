import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayperiodSettingsDashComponent } from './payperiod-settings-dash.component';

describe('PayperiodSettingsDashComponent', () => {
  let component: PayperiodSettingsDashComponent;
  let fixture: ComponentFixture<PayperiodSettingsDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayperiodSettingsDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayperiodSettingsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
