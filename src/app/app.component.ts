import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultaProfissionaisComponent } from './consulta-profissionais/consulta-profissionais.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ConsultaProfissionaisComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicosWeb';
}
