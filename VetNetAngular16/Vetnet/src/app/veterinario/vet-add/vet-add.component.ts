import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Veterinario } from '../veterinario';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-vet-add',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './vet-add.component.html',
  styleUrls: ['./vet-add.component.css']
})
export class VetAddComponent {

  registroVet: Veterinario = {
    id: 0,
    nombre: '',
    especialidad: '',
    cedula: 0,
    num_atenciones: 0,
    password: '',
    foto: '',
  };

  constructor(private http: HttpClient, private router: Router) {}
  
  agregarVet() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('http://localhost:8090/veterinario/registrar', JSON.stringify(this.registroVet), { headers })
      .subscribe({
        next: (response) => {
          console.log('Registro exitoso', response);
          this.router.navigate(['/veterinarios']);
        },
        error: (error) => {
          console.error('Error en el registro', error);
        }
      });
  }

}
