import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from './components/components.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';



@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      AdminLayoutComponent

   ],
   imports: [
      CommonModule,
      BrowserAnimationsModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      HttpModule,
      BrowserModule,
      ComponentsModule
    ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
