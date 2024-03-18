import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DespesaReceitaPage } from './despesa-receita.page';

describe('DespesaReceitaPage', () => {
  let component: DespesaReceitaPage;
  let fixture: ComponentFixture<DespesaReceitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaReceitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
