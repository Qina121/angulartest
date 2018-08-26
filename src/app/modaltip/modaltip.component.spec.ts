import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltipComponent } from './modaltip.component';

describe('ModaltipComponent', () => {
  let component: ModaltipComponent;
  let fixture: ComponentFixture<ModaltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
