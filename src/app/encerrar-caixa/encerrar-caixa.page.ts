import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
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
    IonList,
  ],
})
export class EncerrarCaixaPage {
  // Variável de estado para controlar se o botão está desabilitado
  isDisabled = false;

  constructor(
    // Injeção do AlertController
    private alertController: AlertController
  ) {}

  async confirmarEncerramento() {
    // Desabilita o botão
    this.isDisabled = true;

    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Você realmente deseja encerrar o caixa?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // Habilita o botão se o usuário cancelar o encerramento
            this.isDisabled = false;
          },
        },
        {
          text: 'Encerrar',
          handler: () => {
            this.encerrarCaixa();
          },
        },
      ],
    });

    await alert.present();
  }

  encerrarCaixa() {
    // Aqui você pode adicionar o código para encerrar o caixa
  }
}
