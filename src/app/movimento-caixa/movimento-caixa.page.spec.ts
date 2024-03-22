import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovimentoCaixaPage } from './movimento-caixa.page';

describe('MovimentoCaixaPage', () => {
  let component: MovimentoCaixaPage;
  let fixture: ComponentFixture<MovimentoCaixaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentoCaixaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
