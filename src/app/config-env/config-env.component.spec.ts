import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigEnvComponent } from './config-env.component';

describe('ConfigEnvComponent', () => {
  let component: ConfigEnvComponent;
  let fixture: ComponentFixture<ConfigEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigEnvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
