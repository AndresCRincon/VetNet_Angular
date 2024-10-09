import { Component } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from '../../service/mascota.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { ButtonsModule } from 'ngx-bootstrap/buttons';

@Component({
  selector: 'app-mascota-table',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './mascota-table.component.html',
  styleUrls: ['./mascota-table.component.css']
})
export class MascotaTableComponent {

  selectedMascot!: Mascota;
  mascotaList!: Mascota[];

  constructor(private mascotaService: MascotaService){
    
  }

  ngOnInit():void{
    const clienteId = localStorage.getItem('clienteId');
    if(clienteId){
      this.mascotaService.findByCliente(+clienteId).subscribe(
        (mascotas) => this.mascotaList = mascotas
      )
    }
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
