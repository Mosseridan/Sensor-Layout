// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatSelectModule } from '@angular/material';

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
import { AddSiteComponent } from './components/add-site/add-site.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { AddTypeComponent } from './components/add-type/add-type.component';
import { AddManufacturerComponent } from './components/add-manufacturer/add-manufacturer.component';
import { AddProtocolComponent } from './components/add-protocol/add-protocol.component';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';


const appRoutes = [
  {path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent, canActivate:[AuthGuard]},
  {path: 'add-type', component: AddTypeComponent, canActivate:[AuthGuard]},  
  {path: 'add-protocol', component: AddProtocolComponent, canActivate:[AuthGuard]},    
  {path: 'add-manufacturer', component: AddManufacturerComponent, canActivate:[AuthGuard]},
  {path: 'add-sensor', component: AddSensorComponent, canActivate:[AuthGuard]},
  {path: 'add-gateway', component: AddGatewayComponent, canActivate:[AuthGuard]},
  {path: 'add-site', component: AddSiteComponent, canActivate:[AuthGuard]},
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
    AddSiteComponent,
    AutoCompleteComponent,
    AddTypeComponent,
    AddManufacturerComponent,
    AddProtocolComponent,
    MultipleChoiceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatSelectModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ValidationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
