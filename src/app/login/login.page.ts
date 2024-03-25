import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { validateCpf, validateSenha } from './validacaoLogin';

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
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
})
export class LoginPage {
  showPassword = false;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) {
    this.loginForm = this.formBuilder.group({
      cpf: ['', [Validators.required, validateCpf]],
      senha: ['', [Validators.required, validateSenha]],
    });
  }

  // Responsável por navegar para a página desejada
  navegarPara(rota: string) {
    this.router.navigateByUrl(rota);
  }

  // Responsável por exibir o status do formulário na tela do usuário
  async fazerLogin() {
    let errorMessage = ''; // Inicializa a mensagem de erro como uma string vazia

    // Se o formulário for válido
    if (this.loginForm?.valid) {
      console.warn(this.loginForm.value); // Loga os valores do formulário no console

      // Cria um box com a mensagem de sucesso
      const toast = await this.toastController.create({
        message: 'Login realizado com sucesso!',
        duration: 2000,
        color: 'success',
      });

      toast.present(); // Apresenta a mensagem
      this.navegarPara('home'); // Navega para a página 'home'
    } else {
      // Se ambos os campos estiverem vazios
      if (
        this.loginForm?.get('cpf')?.hasError('required') &&
        this.loginForm?.get('senha')?.hasError('required')
      ) {
        errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
      }
      // Se ambos os campos estiverem inválidos
      else if (
        this.loginForm?.get('cpf')?.hasError('cpfNotValid') &&
        this.loginForm?.get('senha')?.hasError('senhaNotValid')
      ) {
        errorMessage = 'O CPF e a senha inseridos não são válidos.';
      }
      // Se apenas o CPF estiver inválido
      else if (this.loginForm?.get('cpf')?.hasError('cpfNotValid')) {
        errorMessage = 'O CPF inserido não é válido.';
      }
      // Se apenas a senha estiver inválida
      else if (this.loginForm?.get('senha')?.hasError('senhaNotValid')) {
        errorMessage = 'A senha deve ter pelo menos 6 caracteres.';
      }

      // Cria um box com a mensagem de erro
      const toast = await this.toastController.create({
        message: errorMessage,
        duration: 2000,
        color: 'danger',
      });

      toast.present(); // Apresenta a mensagem
    }
  }
}
