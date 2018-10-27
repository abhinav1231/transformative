import { AdminRoutes } from './admin.routing';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from '../../Global.service';
import { StudenttableComponent } from './studenttable/studenttable.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    StudentComponent,
    StudenttableComponent
  ],
  providers: [GlobalService],
})
export class AdminLayoutModule { }
