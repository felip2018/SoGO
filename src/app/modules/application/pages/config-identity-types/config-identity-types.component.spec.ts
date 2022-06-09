import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigIdentityTypesComponent } from './config-identity-types.component';

describe('ConfigIdentityTypesComponent', () => {
  let component: ConfigIdentityTypesComponent;
  let fixture: ComponentFixture<ConfigIdentityTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigIdentityTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigIdentityTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
