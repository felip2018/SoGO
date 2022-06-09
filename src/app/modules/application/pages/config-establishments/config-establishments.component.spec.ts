import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigEstablishmentsComponent } from './config-establishments.component';

describe('ConfigEstablishmentsComponent', () => {
  let component: ConfigEstablishmentsComponent;
  let fixture: ComponentFixture<ConfigEstablishmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigEstablishmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigEstablishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
