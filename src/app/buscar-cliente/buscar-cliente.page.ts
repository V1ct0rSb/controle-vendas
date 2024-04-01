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
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.page.html',
  styleUrls: ['./buscar-cliente.page.scss'],
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
  ],
})
export class BuscarClientePage {
  constructor(private router: Router) {}

  navegarPara(rota: string) {
    this.router.navigateByUrl(rota);
  }
}
