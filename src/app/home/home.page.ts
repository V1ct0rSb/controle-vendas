import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon],
})
export class HomePage {
  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  navegarPara(rota: string) {
    this.router.navigateByUrl(rota);
  }

  async confirmarSaida() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Você realmente deseja sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Sair',
          handler: () => {
            this.navegarPara('login');
          },
        },
      ],
    });
    await alert.present();
  }
}
