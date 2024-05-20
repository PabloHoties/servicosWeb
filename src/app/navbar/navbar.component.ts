import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { config } from '../../environments/environment';
import { decrypt } from '../helpers/crypto-helper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isAuthenticated: boolean = false;
  emailUsuario: string = '';

  ngOnInit(): void {

    if (localStorage.getItem(config.authEmail) != null && localStorage.getItem(config.authToken) != null) {
      const email = decrypt(localStorage.getItem(config.authEmail) as string);

      this.isAuthenticated = true;
      this.emailUsuario = email;
    }
  }

  logout(): void {

    if (confirm('Deseja realmente sair do sistema?')) {
      localStorage.removeItem(config.authEmail);
      localStorage.removeItem(config.authToken);

      location.href = '/';
    }
  }
}
