import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from '../mascota';
import { MascotaService } from '../../service/mascota.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-mascota-detail',
  templateUrl: './mascota-detail.component.html',
  styleUrls: ['./mascota-detail.component.css']
})
export class MascotaDetailComponent implements OnInit {
  mascota!: Mascota;

  constructor(private route: ActivatedRoute, private mascotaService: MascotaService, 
    private clienteService:ClienteService) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>{
      const id = Number(params.get('id'));
      this.mascotaService.findById(id).pipe(
        mergeMap(
          (mascotaInfo) => {
            this.mascota = mascotaInfo;
            return this.mascotaService.findById(this.mascota.cliente?.id!);
          }
        )
      ).subscribe(
        /*(cliente) => {
          this.clienteService.mascota = mascota;
        }*/
      )
    })
    
  }
}

