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

  // Método para cadastrar um cliente
  async cadastrarCliente() {
    // Se o formulário é válido
    if (this.clienteForm && this.clienteForm.valid) {
      // Log dos valores do formulário
      console.warn(this.clienteForm.value);
      // Criação de um toast de sucesso
      const toast = await this.toastController.create({
        message: 'Cliente registrado com sucesso!',
        duration: 2000,
        color: 'success',
      });
      // Apresentação do toast
      toast.present();

      // Limpeza do formulário
      this.clienteForm.reset();
    } else {
      // Mensagem de erro padrão
      let errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
      // Se o CPF/CNPJ não é válido
      if (this.clienteForm?.get('cpfCnpj')?.hasError('cpfCnpjNotValid')) {
        errorMessage = 'O CPF/CNPJ inserido não é válido.';
      }
      // Se o telefone não é válido
      else if (
        this.clienteForm?.get('telefone')?.hasError('telefoneNotValid')
      ) {
        errorMessage = 'O telefone inserido não é válido.';
      }
      // Criação de um toast de erro
      const toast = await this.toastController.create({
        message: errorMessage,
        duration: 2000,
        color: 'danger',
      });
      // Apresentação do toast
      toast.present();
    }
  }
}
