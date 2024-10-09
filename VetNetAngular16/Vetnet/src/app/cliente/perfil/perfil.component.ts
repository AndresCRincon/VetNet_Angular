import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClienteService } from '../../service/cliente.service';
import { Cliente } from '../cliente';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { mergeMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], 
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfilForm: FormGroup;
  cliente!: Cliente;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private route: ActivatedRoute,

  ) {
    this.perfilForm = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['']
    });
  }

  ngOnInit(): void {
    const clienteId = localStorage.getItem('clienteId');
    if (clienteId) {
      this.route.paramMap.subscribe(params =>{
        const id = Number(params.get('id'));
        this.clienteService.findById(+clienteId);
      },error => {
        console.error('Error al cargar los datos del cliente', error);
        this.errorMessage = 'Error al cargar la información del perfil';
      });
    } else {
      this.errorMessage = 'No se ha encontrado el ID del cliente.';
    }
    
    
  }

  onSubmit(): void {
    if (this.perfilForm.valid) {
      const clienteModificado = this.perfilForm.value;
      const clienteId = this.cliente?.id;

      if (clienteId) {
        this.clienteService.modificarCliente(clienteModificado).subscribe({
          next: () => {
            this.successMessage = 'Perfil actualizado exitosamente';
          },
          error: (error) => {
            this.errorMessage = 'Error al actualizar el perfil';
            console.error('Error al actualizar el perfil', error);
          }
        });
      }
    }
  }
}
