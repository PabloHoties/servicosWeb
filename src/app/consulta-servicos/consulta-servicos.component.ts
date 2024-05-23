import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { config } from '../../environments/environment';
import { authHeader } from '../helpers/httpheader-helper';

@Component({
  selector: 'app-consulta-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-servicos.component.html',
  styleUrl: './consulta-servicos.component.css'
})
export class ConsultaServicosComponent implements OnInit {
  
  servicos: any[] = [];
  mensagemSucesso: string = '';
  mensagemErro: string = '';

  constructor(
    private httpClient: HttpClient
  ) {}
  
  ngOnInit(): void {
    
    this.httpClient.get(config.apiUrl + '/servicos/consultar', { headers: authHeader() })
      .subscribe({
        next: (data) => {
          this.servicos = data as any;
        },
        error: (e) => {
          console.log(e.error);
        }
      })
  }

  onDelete(id: string): void {

    if (confirm('Deseja realmente excluir o serviço selecionado?')) {

      this.httpClient.delete(config.apiUrl + '/servicos/deletar/' + id, { headers: authHeader() })
        .subscribe({
          next: (data) => {
            this.mensagemSucesso = 'Serviço excluído com sucesso.';
            this.ngOnInit;
          },
          error: (e) => {
            this.mensagemErro = e.error as string;
          }
        })
    }
  }
}
