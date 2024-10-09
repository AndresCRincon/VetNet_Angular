import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cedula: number = 0;
  password: string = '';
  userType: string = 'cliente'; // default as 'cliente'
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const body = {
      cedula: this.cedula,
      password: this.password
    };

    const endpoint = this.userType === 'cliente' 
      ? 'http://localhost:8090/cliente/login' 
      : 'http://localhost:8090/veterinario/login';

    this.http.post(endpoint, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      withCredentials: true 
    }).subscribe({
      next: (response: any) => {
        console.log('Login exitoso', response);
        
        if (response && response.id) {
          if (this.userType === 'cliente') {
            localStorage.setItem('clienteId', response.id);
            this.router.navigate(['/portal']);
          } else {
            localStorage.setItem('veterinarioId', response.id);
            this.router.navigate(['/vet-portal']); 
          }
        }
      },
      error: (error) => {
        this.errorMessage = 'Cédula o contraseña incorrectos';
        console.error('Error en el inicio de sesión', error); 
      }
    });
  }
}

