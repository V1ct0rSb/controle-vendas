import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncerrarCaixaPage } from './encerrar-caixa.page';

describe('EncerrarCaixaPage', () => {
  let component: EncerrarCaixaPage;
  let fixture: ComponentFixture<EncerrarCaixaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EncerrarCaixaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
