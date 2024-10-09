import { Component } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from '../../service/mascota.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mascota-add',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './mascota-add.component.html',
  styleUrls: ['./mascota-add.component.css']
})
export class MascotaAddComponent {
  mascota: Mascota = {
    id: 0,
    nombre: '',
    peso: '',
    raza: '',
    enfermedad: '',
    estado: '',
    edad: 0,
    imagen:'',
    cliente: undefined,
  };

  constructor(private mascotaService: MascotaService, private router: Router) {}

  agregarMascota() {
    this.mascotaService.addMascota(this.mascota);
    this.router.navigate(['/mascotas']);
  }
}
