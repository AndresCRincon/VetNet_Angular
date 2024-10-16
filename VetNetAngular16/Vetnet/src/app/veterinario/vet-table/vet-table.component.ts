import { Component } from '@angular/core';
import { Veterinario } from '../veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vet-table',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './vet-table.component.html',
  styleUrls: ['./vet-table.component.css']
})
export class VetTableComponent {
  selectedVet!: Veterinario;
  vetList!: Veterinario[];

  constructor(private vetService: VeterinarioService){
    
  }

  ngOnInit():void{
      this.vetService.getAllVeterinarios().subscribe(
        (vets) => this.vetList = vets
      )
  } 


  mostrarVet(vet:Veterinario){
    this.selectedVet = vet;
  }

  agregarVet(vet:Veterinario){
    this.vetList.push(vet);

  }

  eliminarVet(vet:Veterinario) {
    if (confirm('¿Estás seguro de que deseas eliminar este veterinario?')) {
      var index = this.vetList.indexOf(vet);
      this.vetList.splice(index,1);
      this.vetService.eliminarVeterinario(vet.id);
    }
  }
}
