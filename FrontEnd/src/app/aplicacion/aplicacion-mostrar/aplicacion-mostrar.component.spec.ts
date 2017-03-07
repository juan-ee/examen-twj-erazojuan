import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionMostrarComponent } from './aplicacion-mostrar.component';

describe('AplicacionMostrarComponent', () => {
  let component: AplicacionMostrarComponent;
  let fixture: ComponentFixture<AplicacionMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacionMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
