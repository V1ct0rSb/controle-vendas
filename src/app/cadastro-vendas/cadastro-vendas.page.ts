import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonButtons,
  IonBackButton,
  IonSelect,
  IonSelectOption,
  IonList,
  IonDatetime,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cadastro-vendas',
  templateUrl: './cadastro-vendas.page.html',
  styleUrls: ['./cadastro-vendas.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonButtons,
    IonBackButton,
    IonSelect,
    IonSelectOption,
    IonList,
    IonDatetime,
  ],
})
export class CadastroVendasPage {
  // Data atual
  dataAtual = new Date().toLocaleDateString('pt-BR');

  constructor() {}
}
