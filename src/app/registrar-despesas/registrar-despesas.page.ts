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
  IonDatetime,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-registrar-despesas',
  templateUrl: './registrar-despesas.page.html',
  styleUrls: ['./registrar-despesas.page.scss'],
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
    IonDatetime,
  ],
})
export class RegistrarDespesasPage {
  // Data atual
  dataAtual = new Date().toLocaleDateString('pt-BR');

  constructor() {}
}
