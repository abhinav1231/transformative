import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { StudenttableComponent } from './studenttable/studenttable.component';


export const AdminRoutes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'student', component: StudentComponent },
  { path: 'studentdatatable', component: StudenttableComponent }
];
