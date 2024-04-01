import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebitosClientesPage } from './debitos-clientes.page';

describe('DebitosClientesPage', () => {
  let component: DebitosClientesPage;
  let fixture: ComponentFixture<DebitosClientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitosClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
