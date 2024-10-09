import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tratamiento } from '../tratamiento';
import { TratamientoService } from 'src/app/service/tratamiento.service';

@Component({
  selector: 'app-tratamiento-table',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './tratamiento-table.component.html',
  styleUrls: ['./tratamiento-table.component.css']
})
export class TratamientoTableComponent {

  selectedTratamiento!: Tratamiento;
  tratamientoList!: Tratamiento[];

  constructor(private tratamientoService:TratamientoService){
    
  }

  ngOnInit():void{
    const veterinarioId = localStorage.getItem('veterinarioId');
    if(veterinarioId){
      this.tratamientoService.findByVeterinario(+veterinarioId).subscribe(
        (tratamientos) => this.tratamientoList = tratamientos
      )
    }
  } 

  agregarTratamiento(tratamiento:Tratamiento){
    this.tratamientoList.push(tratamiento);

  }

  eliminarTratamiento(tratamiento:Tratamiento) {
    if (confirm('¿Estás seguro de que desea borrar el tratamiento?')) {
      var index = this.tratamientoList.indexOf(tratamiento);
      this.tratamientoList.splice(index,1);
      this.tratamientoService.deleteById(tratamiento.id);
    }
  }
}
