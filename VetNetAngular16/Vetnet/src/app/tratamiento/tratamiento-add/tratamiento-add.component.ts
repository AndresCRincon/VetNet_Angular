import { Component, OnInit } from '@angular/core';
import { Tratamiento } from '../tratamiento';
import { TratamientoService } from 'src/app/service/tratamiento.service';
import { MascotaService } from 'src/app/service/mascota.service';
import { DrogaService } from 'src/app/service/droga.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Mascota } from 'src/app/mascota/mascota';
import { Droga } from 'src/app/droga/droga';


@Component({
  selector: 'app-tratamiento-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tratamiento-add.component.html',
  styleUrls: ['./tratamiento-add.component.css']
})
export class TratamientoAddComponent implements OnInit {

  tratamiento: Tratamiento = {
    id: 0,
    fecha: '',
    mascota: undefined,
    veterinario: undefined,
    droga: undefined,
  };

  mascotas: Mascota[] = [];
  drogas: Droga[] = [];

  constructor(
    private tratamientoService: TratamientoService,
    private mascotaService: MascotaService,
    private drogaService: DrogaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mascotaService.findAll().subscribe(data => {
      this.mascotas = data.filter(mascota => mascota.estado === 'Activo');
    });

    this.drogaService.findAll().subscribe(data => {
      this.drogas = data;
    });
  }

  agregarTratamiento() {
    const veterinarioId = localStorage.getItem('veterinarioId');
    if (veterinarioId) {
      this.tratamientoService.addTratamiento(this.tratamiento, +veterinarioId);
        this.router.navigate(['/tratamientos']);
    }
  }
}
