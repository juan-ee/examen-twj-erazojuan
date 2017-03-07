import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularBorrarComponent } from './celular-borrar.component';

describe('CelularBorrarComponent', () => {
  let component: CelularBorrarComponent;
  let fixture: ComponentFixture<CelularBorrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelularBorrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelularBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
