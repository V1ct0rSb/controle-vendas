import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
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
export class LoginPage {
  constructor(private router: Router) {}

  navegarPara(rota: string) {
    this.router.navigateByUrl(rota);
  }
}
