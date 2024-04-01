import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-registrar-vendas',
  templateUrl: './registrar-vendas.page.html',
  styleUrls: ['./registrar-vendas.page.scss'],
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
    IonDatetime,
    IonCheckbox,
    IonSegment,
    IonSegmentButton,
    ReactiveFormsModule,
  ],
})
export class RegistrarVendasPage implements OnInit {
  pixSelecionado = false;
  dinheiroSelecionado = false;
  creditoSelecionado = false;
  cartaoSelecionado = false;

  // Data e Hora atual
  dataAtual: string = '';
  horaAtual: string = '';

  vendaForm: FormGroup;

  constructor(
    private toastController: ToastController,
    private formBuilder: FormBuilder
  ) {
    this.vendaForm = this.formBuilder.group(
      {
        dataCompra: ['', Validators.required],
        horaCompra: ['', Validators.required],
        cliente: ['', Validators.required],
        placaCarro: ['', Validators.required],
        tipoVeiculo: ['', Validators.required],
        material: ['', Validators.required],
        totalVenda: ['', Validators.required],
        pixSelecionado: [false],
        valorPix: [''],
        dinheiroSelecionado: [false],
        valorDinheiro: [''],
        creditoSelecionado: [false],
        valorCredito: [''],
        cartaoSelecionado: [false],
        valorCartao: [''],
      },
      { validators: [this.checkTotal, this.checkPayment] }
    );
  }

  // Verifica se os campos de pagamento foram preenchidos corretamente
  checkPayment = (group: FormGroup) => {
    // Se o pagamento por Pix foi selecionado, mas o valor não foi fornecido
    if (
      group.controls['pixSelecionado'].value &&
      !group.controls['valorPix'].value
    ) {
      return { pixNotProvided: true };
    }
    // Se o pagamento em dinheiro foi selecionado, mas o valor não foi fornecido
    if (
      group.controls['dinheiroSelecionado'].value &&
      !group.controls['valorDinheiro'].value
    ) {
      return { dinheiroNotProvided: true };
    }
    // Se o pagamento por crédito foi selecionado, mas o valor não foi fornecido
    if (
      group.controls['creditoSelecionado'].value &&
      !group.controls['valorCredito'].value
    ) {
      return { creditoNotProvided: true };
    }
    // Se o pagamento por cartão foi selecionado, mas o valor não foi fornecido
    if (
      group.controls['cartaoSelecionado'].value &&
      !group.controls['valorCartao'].value
    ) {
      return { cartaoNotProvided: true };
    }
    // Se todos os campos de pagamento foram preenchidos corretamente
    return null;
  };

  // Verifica se o total pago é igual ao total da venda
  checkTotal(group: FormGroup) {
    // Obtém o total da venda
    const totalVenda = group.controls['totalVenda'].value;
    // Calcula o total pago
    const valorPix = group.controls['pixSelecionado'].value
      ? group.controls['valorPix'].value || 0
      : 0;
    const valorDinheiro = group.controls['dinheiroSelecionado'].value
      ? group.controls['valorDinheiro'].value || 0
      : 0;
    const valorCredito = group.controls['creditoSelecionado'].value
      ? group.controls['valorCredito'].value || 0
      : 0;
    const valorCartao = group.controls['cartaoSelecionado'].value
      ? group.controls['valorCartao'].value || 0
      : 0;
    const totalPago = valorPix + valorDinheiro + valorCredito + valorCartao;
    // Se o total pago é igual ao total da venda
    return totalPago === totalVenda ? null : { notEqual: true };
  }

  // Método que é chamado quando o componente é inicializado
  ngOnInit() {
    // Obtém a data e a hora atual
    let now = new Date();
    let offsetInHours = now.getTimezoneOffset() / 60;
    now.setHours(now.getHours() - offsetInHours - 0);
    this.dataAtual = now.toISOString().split('T')[0];
    this.horaAtual = now.toISOString().split('T')[1].slice(0, 5);
    // Atualiza os campos de data e hora do formulário
    this.vendaForm.patchValue({
      dataCompra: this.dataAtual,
      horaCompra: this.horaAtual,
    });
    // Verifica os campos de pagamento e o total da venda
    this.checkPayment(this.vendaForm);
    this.checkTotal(this.vendaForm);
  }

  // Método para cadastrar uma venda
  async cadastrarVenda() {
    // Obtém os erros do formulário
    const errors = this.vendaForm.errors;
    // Se o formulário é válido e não há erros
    if (
      this.vendaForm.valid &&
      !errors?.['notEqual'] &&
      !errors?.['pixNotProvided'] &&
      !errors?.['dinheiroNotProvided'] &&
      !errors?.['creditoNotProvided'] &&
      !errors?.['cartaoNotProvided']
    ) {
      // Log dos valores do formulário
      console.warn(this.vendaForm.value);
      // Criação de um toast de sucesso
      const toast = await this.toastController.create({
        message: 'Venda registrada com sucesso!',
        duration: 2000,
        color: 'success',
      });
      // Apresentação do toast
      toast.present();

      // Limpa o formulário
      this.vendaForm.reset();

      // Atualiza a data e a hora
      let now = new Date();
      let offsetInHours = now.getTimezoneOffset() / 60;
      now.setHours(now.getHours() - offsetInHours - 0);
      this.dataAtual = now.toISOString().split('T')[0];
      this.horaAtual = now.toISOString().split('T')[1].slice(0, 5);
      this.vendaForm.patchValue({
        dataCompra: this.dataAtual,
        horaCompra: this.horaAtual,
      });
    } else {
      // Mensagem de erro padrão
      let message = 'Por favor, preencha todos os campos obrigatórios.';
      // Se o total pago não é igual ao total da venda
      if (errors?.['notEqual']) {
        message =
          'A soma dos valores de pagamento deve ser igual ao valor total da venda.';
      }
      // Se o valor de algum pagamento selecionado não foi fornecido
      else if (
        errors?.['pixNotProvided'] ||
        errors?.['dinheiroNotProvided'] ||
        errors?.['creditoNotProvided'] ||
        errors?.['cartaoNotProvided']
      ) {
        message =
          'Por favor, forneça o valor para cada forma de pagamento selecionada.';
      }
      // Criação de um toast de erro
      const toast = await this.toastController.create({
        message: message,
        duration: 2000,
        color: 'danger',
      });
      // Apresentação do toast
      toast.present();
    }
  }
}
