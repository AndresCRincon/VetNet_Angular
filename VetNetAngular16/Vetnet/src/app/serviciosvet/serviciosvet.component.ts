import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponentComponent } from '../header-component/header-component.component';

@Component({
  selector: 'app-serviciosvet',
  standalone: true,
  imports: [RouterModule,CommonModule,HeaderComponentComponent],
  templateUrl: './serviciosvet.component.html',
  styleUrls: ['./serviciosvet.component.css']
})
export class ServiciosvetComponent {

}
