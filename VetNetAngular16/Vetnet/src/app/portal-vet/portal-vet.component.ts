import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portal-vet',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './portal-vet.component.html',
  styleUrls: ['./portal-vet.component.css']
})
export class PortalVetComponent {

}
