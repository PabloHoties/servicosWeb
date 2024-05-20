import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { config } from '../../environments/environment';
import { encrypt } from '../helpers/crypto-helper';

@Component({
  selector: 'app-autenticar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './autenticar-usuario.component.html',
  styleUrl: './autenticar-usuario.component.css'
})
export class AutenticarUsuarioComponent {

  mensagemErro: string = '';

  constructor(
    private httpClient: HttpClient
  ) {}

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    senha: new FormControl('', [
      Validators.required, Validators.minLength(8)
    ])
  });

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {

    this.mensagemErro = '';

    this.httpClient.post(config.apiUrl + '/usuarios/autenticar', this.form.value,
      { responseType: 'json' })
      .subscribe({
        next: (data: any) => {
          const email = encrypt(data.email as string);
          const token = encrypt(data.token as string);

          localStorage.setItem(config.authEmail, email);
          localStorage.setItem(config.authToken, token);
          
          location.href = '/profissionais-consulta';
        },
        error: (e) => {
          this.mensagemErro = e.error;
        }
      })
  }
}
