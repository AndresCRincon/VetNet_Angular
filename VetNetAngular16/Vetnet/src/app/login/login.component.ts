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
  userType: string = 'cliente';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const body = {
      cedula: this.cedula,
      password: this.password
    };

    let endpoint = '';

    if (this.userType === 'cliente') {
      endpoint = 'http://localhost:8090/cliente/login';
    } else if (this.userType === 'veterinario') {
      endpoint = 'http://localhost:8090/veterinario/login';
    } else if (this.userType === 'admin') {
      endpoint = 'http://localhost:8090/admin/login';
    }
    
    this.http.post(endpoint, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      withCredentials: true 
    }).subscribe({
      next: (response: any) => {
        console.log('Login exitoso', response);
        console.log("Valor de userType:", this.userType);
        
        if (response && response.id) {
          if (this.userType === 'cliente') {
            localStorage.setItem('clienteId', response.id);
            this.router.navigate(['/portal']);
          } else if (this.userType === 'veterinario') {
            localStorage.setItem('veterinarioId', response.id);
            this.router.navigate(['/vet-portal']); 
          } else if (this.userType === 'admin') {
            localStorage.setItem('adminId', response.id);
            this.router.navigate(['/admin-portal']);
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

