import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarVeiculosPage } from './registrar-veiculos.page';

describe('CadastrarVeiculosPage', () => {
  let component: RegistrarVeiculosPage;
  let fixture: ComponentFixture<RegistrarVeiculosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarVeiculosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
