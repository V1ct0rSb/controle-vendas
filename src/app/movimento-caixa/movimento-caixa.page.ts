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
  IonSearchbar,
  IonList,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonTextarea,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-movimento-caixa',
  templateUrl: './movimento-caixa.page.html',
  styleUrls: ['./movimento-caixa.page.scss'],
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
    IonSearchbar,
    IonList,
    IonSelect,
    IonSelectOption,
    IonDatetime,
    IonTextarea,
  ],
})
export class MovimentoCaixaPage {
  constructor() {}
}
