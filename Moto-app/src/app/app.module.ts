import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { LoginAppComponent } from './login-app/login-app.component';
import {MatSelectModule} from '@angular/material/select';
import { RegistrationComponent } from './registration/registration.component';
//import { AddEventModule } from './add-event.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginAppComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    //AddEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
