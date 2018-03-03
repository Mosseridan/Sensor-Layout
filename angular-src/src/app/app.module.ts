// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormField, MatAutocomplete, MatOption } from '@angular/material';

// Services
import { AuthService } from './services/auth/auth.service';
import { ValidationService } from './services/validation/validation.service';
import { AuthGuard } from './guards/auth.guard';


// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddSensorComponent } from './components/add-sensor/add-sensor.component';
import { AddGatewayComponent } from './components/add-gateway/add-gateway.component';


const appRoutes = [
  {path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent, canActivate:[AuthGuard]},
  {path: 'add-sensor', component: AddSensorComponent, canActivate:[AuthGuard]},
  {path: 'add-gateway', component: AddGatewayComponent, canActivate:[AuthGuard]},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,   
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,   
    DashboardComponent,
    AddSensorComponent,
    AddGatewayComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormField,
    MatAutocomplete,
    MatOption
  ],
  providers: [
    AuthService,
    AuthGuard,    
    ValidationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
