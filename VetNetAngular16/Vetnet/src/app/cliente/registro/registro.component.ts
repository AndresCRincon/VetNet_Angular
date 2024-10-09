import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registroCliente: Cliente = {
    id: 0,
    nombre: '',
    correo: '',
    cedula: 0,
    celular: 0,
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  addCliente() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('http://localhost:8090/cliente/registrar', JSON.stringify(this.registroCliente), { headers })
      .subscribe({
        next: (response) => {
          console.log('Registro exitoso', response);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Error en el registro', error);
        }
      });
  }
}
