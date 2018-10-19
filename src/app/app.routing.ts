import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {    path: '',    component: AdminLayoutComponent,
       children: [
       {
        path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',      // canActivate: [AuthGuardService]
       }]},
];

@NgModule({
 imports: [
            CommonModule,
            BrowserModule,
            RouterModule.forRoot(appRoutes)
           ],
             exports: [],
})
export class AppRoutingModule { }
