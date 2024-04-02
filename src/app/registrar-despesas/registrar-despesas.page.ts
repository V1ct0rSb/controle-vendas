import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
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
    ReactiveFormsModule,
  ],
})
export class RegistrarDespesasPage {
  despesaForm: FormGroup;

  // Data atual
  dataAtual = new Date().toLocaleDateString('pt-BR');

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) {
    this.despesaForm = this.formBuilder.group({
      descricao: ['', Validators.required],
      quantidade: ['', Validators.required],
      dataAtual: ['', Validators.required],
      valor: ['', Validators.required],
    });
  }

  async cadastrarDespesa() {
    if (this.despesaForm && this.despesaForm.valid) {
      console.warn(this.despesaForm.value);
      const toast = await this.toastController.create({
        message: 'Despesa registrada com sucesso!',
        duration: 2000,
        color: 'success',
      });
      toast.present();

      // Limpar o formulário
      this.despesaForm.reset();
    } else {
      const toast = await this.toastController.create({
        message: 'Por favor, preencha todos os campos obrigatórios.',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }
}
