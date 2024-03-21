import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarDespesasPage } from './cadastrar-despesas.page';

describe('CadastrarDespesasPage', () => {
  let component: CadastrarDespesasPage;
  let fixture: ComponentFixture<CadastrarDespesasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarDespesasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
