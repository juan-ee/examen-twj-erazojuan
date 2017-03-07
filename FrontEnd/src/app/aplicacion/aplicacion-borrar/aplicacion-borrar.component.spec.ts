import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionBorrarComponent } from './aplicacion-borrar.component';

describe('AplicacionBorrarComponent', () => {
  let component: AplicacionBorrarComponent;
  let fixture: ComponentFixture<AplicacionBorrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacionBorrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
