import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'registrar-cliente',
    loadComponent: () =>
      import('./registrar-cliente/registrar-cliente.page').then(
        (m) => m.RegistrarClientePage
      ),
  },
  {
    path: 'registrar-veiculos',
    loadComponent: () =>
      import('./registrar-veiculos/registrar-veiculos.page').then(
        (m) => m.RegistrarVeiculosPage
      ),
  },
  {
    path: 'encerrar-caixa',
    loadComponent: () =>
      import('./encerrar-caixa/encerrar-caixa.page').then(
        (m) => m.EncerrarCaixaPage
      ),
  },
  {
    path: 'relatorio-vendas',
    loadComponent: () =>
      import('./relatorio-vendas/relatorio-vendas.page').then(
        (m) => m.RelatorioVendasPage
      ),
  },
  {
    path: 'registrar-vendas',
    loadComponent: () =>
      import('./registrar-vendas/registrar-vendas.page').then(
        (m) => m.RegistrarVendasPage
      ),
  },
  {
    path: 'registrar-despesas',
    loadComponent: () =>
      import('./registrar-despesas/registrar-despesas.page').then(
        (m) => m.RegistrarDespesasPage
      ),
  },
  {
    path: 'buscar-cliente',
    loadComponent: () =>
      import('./buscar-cliente/buscar-cliente.page').then(
        (m) => m.BuscarClientePage
      ),
  },
  {
    path: 'movimento-caixa',
    loadComponent: () =>
      import('./movimento-caixa/movimento-caixa.page').then(
        (m) => m.MovimentoCaixaPage
      ),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'editar-cliente',
    loadComponent: () =>
      import('./editar-cliente/editar-cliente.page').then(
        (m) => m.EditarClientePage
      ),
  },
  {
    path: 'debitos-clientes',
    loadComponent: () => import('./debitos-clientes/debitos-clientes.page').then( m => m.DebitosClientesPage)
  },
];
