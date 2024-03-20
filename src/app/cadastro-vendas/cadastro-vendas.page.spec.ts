import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroVendasPage } from './cadastro-vendas.page';

describe('CadastroVendasPage', () => {
  let component: CadastroVendasPage;
  let fixture: ComponentFixture<CadastroVendasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
