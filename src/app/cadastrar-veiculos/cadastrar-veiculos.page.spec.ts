import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarVeiculosPage } from './cadastrar-veiculos.page';

describe('CadastrarVeiculosPage', () => {
  let component: CadastrarVeiculosPage;
  let fixture: ComponentFixture<CadastrarVeiculosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarVeiculosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
