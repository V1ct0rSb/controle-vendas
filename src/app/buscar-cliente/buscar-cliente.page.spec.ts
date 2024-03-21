import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarClientePage } from './buscar-cliente.page';

describe('BuscarClientePage', () => {
  let component: BuscarClientePage;
  let fixture: ComponentFixture<BuscarClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
