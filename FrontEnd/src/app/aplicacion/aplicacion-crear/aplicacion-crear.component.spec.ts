import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionCrearComponent } from './aplicacion-crear.component';

describe('AplicacionCrearComponent', () => {
  let component: AplicacionCrearComponent;
  let fixture: ComponentFixture<AplicacionCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacionCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
