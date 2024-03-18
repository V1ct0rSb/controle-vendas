import { Component, OnInit } from '@angular/core';
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
  IonList
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-encerrar-caixa',
  templateUrl: './encerrar-caixa.page.html',
  styleUrls: ['./encerrar-caixa.page.scss'],
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
    IonList
  ],
})
export class EncerrarCaixaPage {
  constructor() {}
}
