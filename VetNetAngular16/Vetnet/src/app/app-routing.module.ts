import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosvetComponent } from './serviciosvet/serviciosvet.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './cliente/registro/registro.component';
import { PortalComponent } from './portal/portal.component';
import { ClienteTableComponent } from './cliente/cliente-table/cliente-table.component';
import { MascotaTableComponent } from './mascota/mascota-table/mascota-table.component';
import { MascotaAddComponent } from './mascota/mascota-add/mascota-add.component';
import { MascotaDetailComponent } from './mascota/mascota-detail/mascota-detail.component';
import { ModificarMascotaComponent } from './mascota/modificar-mascota/modificar-mascota.component';
import { PerfilComponent } from './cliente/perfil/perfil.component';
import { PortalVetComponent } from './portal-vet/portal-vet.component';
import { TratamientoTableComponent } from './tratamiento/tratamiento-table/tratamiento-table.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosvetComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'portal', component: PortalComponent },
  { path: 'vet-portal', component: PortalVetComponent},
  { path: 'usuarios', component: ClienteTableComponent },
  { path: 'mascotas', component: MascotaTableComponent },
  { path: 'mascotas/agregar', component: MascotaAddComponent },
  { path: 'mascotas/:id', component: MascotaDetailComponent },
  { path: 'mascotas/modificar/:id', component: ModificarMascotaComponent},
  { path: 'perfil', component: PerfilComponent },
  { path: 'tratamientos', component: TratamientoTableComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
