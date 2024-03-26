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
  selector: 'app-cadastro-vendas',
  templateUrl: './cadastro-vendas.page.html',
  styleUrls: ['./cadastro-vendas.page.scss'],
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
export class CadastroVendasPage implements OnInit {
  pixSelecionado = false;
  dinheiroSelecionado = false;
  creditoSelecionado = false;
  cartaoSelecionado = false;

  // Data e Hora atual
  dataAtual: string = '';
  horaAtual: string = '';

  // Segmento selecionado
  segmentoSelecionado = 'umaForma';

  vendaForm: FormGroup;

  constructor(
    private toastController: ToastController,
    private formBuilder: FormBuilder
  ) {
    this.vendaForm = this.formBuilder.group({
      dataCompra: ['', Validators.required],
      horaCompra: ['', Validators.required],
      cliente: ['', Validators.required],
      placaCarro: ['', Validators.required],
      tipoVeiculo: ['', Validators.required],
      material: ['', Validators.required],
      totalVenda: ['', Validators.required],
      formaPagamento: [', '],
      valorPix: [''],
      valorDinheiro: [''],
      valorCredito: [''],
      valorCartao: [''],
    });
  }

  // Data e Hora atual
  ngOnInit() {
    let now = new Date();
    let offsetInHours = now.getTimezoneOffset() / 60;
    now.setHours(now.getHours() - offsetInHours - 0);
    this.dataAtual = now.toISOString().split('T')[0];
    this.horaAtual = now.toISOString().split('T')[1].slice(0, 5);
    this.vendaForm.patchValue({
      dataCompra: this.dataAtual,
      horaCompra: this.horaAtual,
    });
  }

  async cadastrarVenda() {
    if (this.vendaForm.valid) {
      console.warn(this.vendaForm.value);
      const toast = await this.toastController.create({
        message: 'Venda registrada com sucesso!',
        duration: 2000,
        color: 'success',
      });
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
      const toast = await this.toastController.create({
        message: 'Por favor, preencha todos os campos obrigatórios.',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }
}
