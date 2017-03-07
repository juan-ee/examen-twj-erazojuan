import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionActualizarComponent } from './aplicacion-actualizar.component';

describe('AplicacionActualizarComponent', () => {
  let component: AplicacionActualizarComponent;
  let fixture: ComponentFixture<AplicacionActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacionActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
