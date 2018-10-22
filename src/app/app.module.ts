import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//jquery
declare var $:any;
//routing
import {routing , appRoutingProviders } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { PreferenciasComponent } from './components/preferencias/preferencias.component';
import { CambiosComponent } from './components/cambios/cambios.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AutenticacionService} from './services/autenticacion/autenticacion.service';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SettingsComponent,
    DashboardComponent,
    ErrorComponent,
    ReportesComponent,
    PreferenciasComponent,
    CambiosComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    RecoverPasswordComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [appRoutingProviders,AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
