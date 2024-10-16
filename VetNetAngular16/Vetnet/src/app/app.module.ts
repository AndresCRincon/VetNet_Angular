import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ClienteTableComponent } from './cliente/cliente-table/cliente-table.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './cliente/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortalVetComponent } from './portal-vet/portal-vet.component';
import { TratamientoTableComponent } from './tratamiento/tratamiento-table/tratamiento-table.component';
import { TratamientoDetailComponent } from './tratamiento/tratamiento-detail/tratamiento-detail.component';
import { VetTableComponent } from './veterinario/vet-table/vet-table.component';
import { DrogaDetailComponent } from './droga/droga-detail/droga-detail.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { VetAddComponent } from './veterinario/vet-add/vet-add.component';
import { ModificarVetComponent } from './veterinario/modificar-vet/modificar-vet.component';
import { TratamientoAddComponent } from './tratamiento/tratamiento-add/tratamiento-add.component';
import { MascotaTableVetComponent } from './mascota/mascota-table-vet/mascota-table-vet.component';
@NgModule({
  declarations:[
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    ClienteTableComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    RouterModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
