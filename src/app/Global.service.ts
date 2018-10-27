import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentData } from './layouts/admin-layout/studentdata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class GlobalService {
  constructor(private http: HttpClient) {}

  private _url: any = "http://localhost:3000/admin/student";

  // // datatable api
  // getStudentsdata(): Observable<StudentData[]> {
  //   return this.http.get<StudentData[]>(this._url);
  // }
  getStudentsdata(){
    return this.http.get(this._url);
  }
}

