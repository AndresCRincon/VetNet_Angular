import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClienteService } from '../../service/cliente.service';
import { Cliente } from '../cliente';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { mergeMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, FormsModule], 
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent{
  cliente!: Cliente;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clienteService.findById(id).subscribe({
      next: (data) => {
        this.cliente = data; 
      },
      error: (err) => {
        console.error('Error fetching cliente:', err);
      }
    });
  }

  modificarCliente() {
    this.clienteService.modificarCliente(this.cliente).subscribe({
      next: (response) => {
        console.log('Cliente actualizado exitosamente', response);
        this.router.navigate(['/portal']);
      },
      error: (err) => {
        console.error('Error al actualizar el cliente:', err);
      }
    });
  }
  
}
