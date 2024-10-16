import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Mascota } from '../mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-mascota-table-vet',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './mascota-table-vet.component.html',
  styleUrls: ['./mascota-table-vet.component.css']
})
export class MascotaTableVetComponent {

  selectedMascot!: Mascota;
  mascotaList!: Mascota[];

  constructor(private mascotaService: MascotaService){
    
  }

  ngOnInit():void{
      this.mascotaService.findAll().subscribe(
        (mascotas) => this.mascotaList = mascotas
      )
  } 


  mostrarMascota(mascota:Mascota){
    this.selectedMascot = mascota;
  }

  agregarMascota(mascota:Mascota){
    this.mascotaList.push(mascota);

  }

  eliminarMascota(mascota:Mascota) {
    if (confirm('¿Estás seguro de que deseas eliminar esta mascota?')) {
      var index = this.mascotaList.indexOf(mascota);
      this.mascotaList.splice(index,1);
      this.mascotaService.deleteById(mascota.id);
    }
  }

}
