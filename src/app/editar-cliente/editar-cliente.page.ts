import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { validateCpfCnpj, validateTelefone } from '../cadastrar-cliente/validacaoCliente';
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
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.page.html',
  styleUrls: ['./editar-cliente.page.scss'],
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
    ReactiveFormsModule,
  ],
})
export class EditarClientePage {
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

  async editarCliente() {
    if (this.clienteForm && this.clienteForm.valid) {
      console.warn(this.clienteForm.value);
      const toast = await this.toastController.create({
        message: 'Cliente editado com sucesso!',
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
