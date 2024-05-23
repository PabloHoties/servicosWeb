import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { config } from '../../environments/environment';
import { authHeader } from '../helpers/httpheader-helper';
import { FormatarService } from '../helpers/formatar.service';

@Component({
  selector: 'app-edicao-profissionais',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edicao-profissionais.component.html',
  styleUrl: './edicao-profissionais.component.css'
})
export class EdicaoProfissionaisComponent implements OnInit {

  mensagemSucesso: string = '';
  mensagemErro: string = '';

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private formatarService: FormatarService
  ) { }

  form = new FormGroup({
    idProfissional: new FormControl('', [
      Validators.required
    ]),
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

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.httpClient.get(config.apiUrl + '/profissionais/obter/' + id, { headers: authHeader() })
      .subscribe({
        next: (data: any) => {

          this.form.controls['idProfissional'].setValue(data.idProfissional);
          this.form.controls['nome'].setValue(data.nome);
          this.form.controls['email'].setValue(data.email);
          this.form.controls['cpf'].setValue(data.cpf);
          this.form.controls['telefone'].setValue(data.telefone);
        },
        error: (e) => {
          console.log(e.error);
        }
      })
  }

  onSubmit(): void {
    this.httpClient.put(config.apiUrl + '/profissionais/atualizar',
    this.form.value, { headers: authHeader() })
      .subscribe({
        next: (data) => {
          this.mensagemSucesso = 'Profissional atualizado com sucesso.';
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
