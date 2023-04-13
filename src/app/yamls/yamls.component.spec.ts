import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlsComponent } from './yamls.component';

describe('YamlsComponent', () => {
  let component: YamlsComponent;
  let fixture: ComponentFixture<YamlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YamlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YamlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
