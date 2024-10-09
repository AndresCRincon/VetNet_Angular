import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ClienteTableComponent } from './cliente/cliente-table/cliente-table.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VetNet';
}
