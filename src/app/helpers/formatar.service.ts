import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatarService {

  constructor() { }

  formatarCPF(value: string): string {
    value = value.replace(/\D/g, '');
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    return value.length > 14 ? value.slice(0, 14) : value;
  }

  formatarTelefone(value: string): string {
    value = value.replace(/\D/g, '');
    if (value.length <= 11) {
      value = value.replace(/^(\d{2})(\d)/, '($1) $2');
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
    }
    return value.length > 15 ? value.slice(0, 15) : value;
  }
}
