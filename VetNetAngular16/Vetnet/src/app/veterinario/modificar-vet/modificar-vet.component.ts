import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from '../../service/mascota.service';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';  
import { Veterinario } from '../veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-modificar-vet',
  standalone: true, 
  imports: [FormsModule, CommonModule],  
  templateUrl: './modificar-vet.component.html',
  styleUrls: ['./modificar-vet.component.css']
})
export class ModificarVetComponent {

  vet!: Veterinario;

  constructor(
    private route: ActivatedRoute,
    private vetService: VeterinarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vetService.getVeterinarioById(id).subscribe({
      next: (data) => {
        this.vet = data;
      },
      error: (err) => {
        console.error('Error fetching veterinario:', err);
      }
    });
  }

  modificarVeterinario() {
      this.vetService.modificarVeterinario(this.vet).subscribe(() => {
        this.router.navigate(['/veterinarios']);
      });
  }

}
