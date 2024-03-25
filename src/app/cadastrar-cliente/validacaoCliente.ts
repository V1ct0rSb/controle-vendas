import { AbstractControl } from '@angular/forms';
import { cpf, cnpj } from 'cpf-cnpj-validator';

// Validação do campo de CPF/CNPJ
export function validateCpfCnpj(control: AbstractControl) {
  const cpfCnpj = control.value;

  if (!cpfCnpj) {
    return { cpfCnpjVazio: true };
  }

  if (!(cpf.isValid(cpfCnpj) || cnpj.isValid(cpfCnpj))) {
    return { cpfCnpjInvalido: true };
  }

  return null;
}

// Validação do campo de telefone
export function validateTelefone(control: AbstractControl) {
  const telefone = control.value;

  if (!telefone) {
    return { telefoneVazio: true };
  }

  // Validar um número de telefone com DDD e 9 dígitos
  const telefoneRegex = /^\d{2}\d{9}$/;

  if (!telefoneRegex.test(telefone)) {
    return { telefoneInvalido: true };
  }

  return null;
}
