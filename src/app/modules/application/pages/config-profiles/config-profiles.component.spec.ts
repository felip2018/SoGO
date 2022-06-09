import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigProfilesComponent } from './config-profiles.component';

describe('ConfigProfilesComponent', () => {
  let component: ConfigProfilesComponent;
  let fixture: ComponentFixture<ConfigProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
