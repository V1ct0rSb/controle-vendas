import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarVendasPage } from './registrar-vendas.page';

describe('CadastroVendasPage', () => {
  let component: RegistrarVendasPage;
  let fixture: ComponentFixture<RegistrarVendasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarVendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
