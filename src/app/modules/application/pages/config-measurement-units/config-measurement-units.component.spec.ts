import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMeasurementUnitsComponent } from './config-measurement-units.component';

describe('ConfigMeasurementUnitsComponent', () => {
  let component: ConfigMeasurementUnitsComponent;
  let fixture: ComponentFixture<ConfigMeasurementUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigMeasurementUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMeasurementUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
