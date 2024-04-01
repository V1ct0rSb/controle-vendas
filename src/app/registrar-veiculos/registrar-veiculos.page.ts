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
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-registrar-veiculos',
  templateUrl: './registrar-veiculos.page.html',
  styleUrls: ['./registrar-veiculos.page.scss'],
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
    ReactiveFormsModule,
  ],
})
export class RegistrarVeiculosPage {
  veiculoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) {
    this.veiculoForm = this.formBuilder.group({
      cliente: ['', Validators.required],
      placa: ['', Validators.required],
      tipo: ['', Validators.required],
    });
  }

  async cadastrarVeiculo() {
    if (this.veiculoForm && this.veiculoForm.valid) {
      console.warn(this.veiculoForm.value);
      const toast = await this.toastController.create({
        message: 'Veículo registrado com sucesso!',
        duration: 2000,
        color: 'success',
      });
      toast.present();

      // Limpar o formulário
      this.veiculoForm.reset();
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
