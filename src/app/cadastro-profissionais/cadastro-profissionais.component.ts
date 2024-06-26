import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { config } from '../../environments/environment';
import { authHeader } from '../helpers/httpheader-helper';
import { FormatarService } from '../helpers/formatar.service';

@Component({
  selector: 'app-cadastro-profissionais',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-profissionais.component.html',
  styleUrl: './cadastro-profissionais.component.css'
})
export class CadastroProfissionaisComponent {

  mensagemSucesso: string = '';
  mensagemErro: string = '';

  constructor(
    private httpClient: HttpClient,
    private formatarService: FormatarService
  ) { }

  form = new FormGroup({
    nome: new FormControl('', [
      Validators.required, Validators.minLength(8), Validators.maxLength(150)
    ]),
    email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    cpf: new FormControl('', [
      Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
    ]),
    telefone: new FormControl('', [
      Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)
    ])
  })

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.httpClient.post(config.apiUrl + '/profissionais/criar',
    this.form.value, { headers: authHeader() })
      .subscribe({
        next: (data) => {
          this.mensagemSucesso = 'Profissional cadastrado com sucesso. Um email foi enviado para confirmar o registro.';
          this.form.reset();
        },
        error: (e) => {
          console.log(e);
          this.mensagemErro = e.error as string;
        }
      })
  }

  onCPFInput(event: any): void {
    event.target.value = this.formatarService.formatarCPF(event.target.value);
  }

  onTelefoneInput(event: any): void {
    event.target.value = this.formatarService.formatarTelefone(event.target.value);
  }

} 
