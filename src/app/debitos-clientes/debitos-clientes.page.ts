import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
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
  IonCheckbox,
  IonSegment,
  IonSegmentButton,
  IonRow,
  IonCol,
  IonSearchbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-debitos-clientes',
  templateUrl: './debitos-clientes.page.html',
  styleUrls: ['./debitos-clientes.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
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
    IonCheckbox,
    IonSegment,
    IonSegmentButton,
    IonRow,
    IonCol,
    IonSearchbar,
  ],
})
export class DebitosClientesPage {
  pagamentoConfirmado = false;

  constructor(private alertController: AlertController) {}

  // Método para confirmar o pagamento
  async confirmarPagamento() {
    // Criando um alerta
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza de que deseja efetuar o pagamento pago?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Sim',
          // Quando o botão 'Sim' é clicado, o pagamento é marcado como confirmado
          handler: () => {
            this.pagamentoConfirmado = true;
            console.log('Débito pago confirmado');
          },
        },
      ],
    });

    // Apresentando o alerta
    await alert.present();
  }
}
