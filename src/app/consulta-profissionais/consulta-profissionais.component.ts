import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { config } from '../../environments/environment';
import { authHeader } from '../helpers/httpheader-helper';

@Component({
  selector: 'app-consulta-profissionais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-profissionais.component.html',
  styleUrl: './consulta-profissionais.component.css'
})
export class ConsultaProfissionaisComponent implements OnInit {

  profissionais: any[] = [];
  mensagemSucesso: string = '';
  mensagemErro: string = '';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ){
  }

  ngOnInit(): void {

    this.httpClient.get(config.apiUrl + '/profissionais/consultar', { headers: authHeader() })
      .subscribe({
        next: (data) => {
          this.profissionais = data as any[];
        },
        error: (e) => {
          console.log(e.error);
        }
      })
  }

  onDelete(id: string): void {

    if (confirm('Deseja realmente excluir o profissional selecionado?')) {

      this.httpClient.delete(config.apiUrl + '/profissionais/deletar/' + id, { headers: authHeader() })
        .subscribe({
          next: (data) => {
            this.mensagemSucesso = 'Profissional excluído com sucesso.';
            this.ngOnInit();
          },
          error: (e) => {
            this.mensagemErro = e.error as string;
          }
        })
    }
  }

  onEdit(idProfissional: string): void {
    this.router.navigate(['/profissionais-edicao', idProfissional]);
  }

}
