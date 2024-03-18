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
    loadComponent: () => import('./encerrar-caixa/encerrar-caixa.page').then( m => m.EncerrarCaixaPage)
  },
];
