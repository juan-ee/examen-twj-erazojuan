import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularMostrarComponent } from './celular-mostrar.component';

describe('CelularMostrarComponent', () => {
  let component: CelularMostrarComponent;
  let fixture: ComponentFixture<CelularMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelularMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelularMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
