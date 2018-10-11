import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//importar componentes
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { PreferenciasComponent } from './components/preferencias/preferencias.component';
import { CambiosComponent } from './components/cambios/cambios.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
  {path:'',component: LoginComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: LoginComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'reportes',component: ReportesComponent},
  {path:'preferencias',component: PreferenciasComponent},
  {path:'cambios',component: CambiosComponent},
  {path:'**',component: ErrorComponent},

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
