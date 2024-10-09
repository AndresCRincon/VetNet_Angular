import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from '../mascota';
import { MascotaService } from '../../service/mascota.service';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-mascota-edit',
  standalone: true, 
  imports: [FormsModule, CommonModule],  
  templateUrl: './modificar-mascota.component.html',
  styleUrls: ['./modificar-mascota.component.css']
})
export class ModificarMascotaComponent implements OnInit {
  mascota!: Mascota;

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mascotaService.findById(id).subscribe({
      next: (data) => {
        this.mascota = data;
      },
      error: (err) => {
        console.error('Error fetching mascota:', err);
      }
    });
  }

  modificarMascota() {
    this.mascotaService.updateMascota(this.mascota).subscribe(() => {
      this.router.navigate(['/mascotas']);
    });
  }
}
