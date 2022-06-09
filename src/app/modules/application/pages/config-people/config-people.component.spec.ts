import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPeopleComponent } from './config-people.component';

describe('ConfigPeopleComponent', () => {
  let component: ConfigPeopleComponent;
  let fixture: ComponentFixture<ConfigPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
