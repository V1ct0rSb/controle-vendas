import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelatorioVendasPage } from './relatorio-vendas.page';

describe('RelatorioVendasPage', () => {
  let component: RelatorioVendasPage;
  let fixture: ComponentFixture<RelatorioVendasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioVendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
