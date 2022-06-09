import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigCitiesComponent } from './config-cities.component';

describe('ConfigCitiesComponent', () => {
  let component: ConfigCitiesComponent;
  let fixture: ComponentFixture<ConfigCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
