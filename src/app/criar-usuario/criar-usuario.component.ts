import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { config } from '../../environments/environment';

@Component({
  selector: 'app-criar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './criar-usuario.component.html',
  styleUrl: './criar-usuario.component.css'
})
export class CriarUsuarioComponent {

  mensagemSucesso: string  = '';
  mensagemErro: string = '';

  constructor(
    private httpClient: HttpClient
  ) {}

  form = new FormGroup({
    nome: new FormControl('', [
      Validators.required, Validators.minLength(8)
    ]),
    email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    senha: new FormControl('', [
      Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{8,}$/)
    ])
  });

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    
    this.mensagemSucesso = '';
    this.mensagemErro = '';

    this.httpClient.post(config.apiUrl + '/usuarios/criar', this.form.value,
      { responseType: 'text' })
      .subscribe({
        next: (data) => {
          this.mensagemSucesso = 'Usuário cadastrado com sucesso.';
          this.form.reset();
        },
        error: (e) => {
          this.mensagemErro = e.error;
        }
      })
  }
}
