import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { validateCpfCnpj, validateTelefone } from './validacaoCliente';

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
  IonInput,
  IonButton,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.page.html',
  styleUrls: ['./registrar-cliente.page.scss'],
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
    IonInput,
    IonButton,
    IonButtons,
    IonBackButton,
    ReactiveFormsModule,
  ],
})
export class RegistrarClientePage {
  clienteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) {
    this.clienteForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpfCnpj: ['', [Validators.required, validateCpfCnpj]],
      telefone: ['', [Validators.required, validateTelefone]],
    });
  }

  async cadastrarCliente() {
    if (this.clienteForm && this.clienteForm.valid) {
      console.warn(this.clienteForm.value);
      const toast = await this.toastController.create({
        message: 'Cliente registrado com sucesso!',
        duration: 2000,
        color: 'success',
      });
      toast.present();

      // Limpar o formulário
      this.clienteForm.reset();
    } else {
      let errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
      if (this.clienteForm?.get('cpfCnpj')?.hasError('cpfCnpjNotValid')) {
        errorMessage = 'O CPF/CNPJ inserido não é válido.';
      } else if (
        this.clienteForm?.get('telefone')?.hasError('telefoneNotValid')
      ) {
        errorMessage = 'O telefone inserido não é válido.';
      }
      const toast = await this.toastController.create({
        message: errorMessage,
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }
}
