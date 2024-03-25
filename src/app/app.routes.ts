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
    path: 'cadastrar-cliente',
    loadComponent: () =>
      import('./cadastrar-cliente/cadastrar-cliente.page').then(
        (m) => m.CadastrarClientePage
      ),
  },
  {
    path: 'cadastrar-veiculos',
    loadComponent: () =>
      import('./cadastrar-veiculos/cadastrar-veiculos.page').then(
        (m) => m.CadastrarVeiculosPage
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
    path: 'cadastro-vendas',
    loadComponent: () =>
      import('./cadastro-vendas/cadastro-vendas.page').then(
        (m) => m.CadastroVendasPage
      ),
  },
  {
    path: 'cadastrar-despesas',
    loadComponent: () =>
      import('./cadastrar-despesas/cadastrar-despesas.page').then(
        (m) => m.CadastrarDespesasPage
      ),
  },
  {
    path: 'buscar-cliente',
    loadComponent: () => import('./buscar-cliente/buscar-cliente.page').then( m => m.BuscarClientePage)
  },
  {
    path: 'movimento-caixa',
    loadComponent: () => import('./movimento-caixa/movimento-caixa.page').then( m => m.MovimentoCaixaPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
];
