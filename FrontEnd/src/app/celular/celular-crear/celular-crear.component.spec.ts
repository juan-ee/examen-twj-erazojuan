import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularCrearComponent } from './celular-crear.component';

describe('CelularCrearComponent', () => {
  let component: CelularCrearComponent;
  let fixture: ComponentFixture<CelularCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelularCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelularCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
