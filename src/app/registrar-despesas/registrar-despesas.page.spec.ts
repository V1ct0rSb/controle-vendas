import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarDespesasPage } from './registrar-despesas.page';

describe('CadastrarDespesasPage', () => {
  let component: RegistrarDespesasPage;
  let fixture: ComponentFixture<RegistrarDespesasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarDespesasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
