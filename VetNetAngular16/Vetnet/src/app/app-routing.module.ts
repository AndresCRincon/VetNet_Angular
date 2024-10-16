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
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { VetTableComponent } from './veterinario/vet-table/vet-table.component';
import { VetAddComponent } from './veterinario/vet-add/vet-add.component';
import { ModificarVetComponent } from './veterinario/modificar-vet/modificar-vet.component';
import { TratamientoAddComponent } from './tratamiento/tratamiento-add/tratamiento-add.component';
import { MascotaTableVetComponent } from './mascota/mascota-table-vet/mascota-table-vet.component';

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
  { path: 'admin-portal', component: AdminPortalComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'veterinarios', component: VetTableComponent},
  { path: 'vet/agregar', component: VetAddComponent},
  { path: 'vet/modificar/:id', component: ModificarVetComponent},
  { path: 'tratamientos/agregar', component: TratamientoAddComponent},
  { path: 'vet/mascotas', component: MascotaTableVetComponent},
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
