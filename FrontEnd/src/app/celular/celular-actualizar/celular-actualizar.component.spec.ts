import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularActualizarComponent } from './celular-actualizar.component';

describe('CelularActualizarComponent', () => {
  let component: CelularActualizarComponent;
  let fixture: ComponentFixture<CelularActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelularActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelularActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
