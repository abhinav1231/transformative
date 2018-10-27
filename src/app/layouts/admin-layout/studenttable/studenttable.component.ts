import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../Global.service';

@Component({
  selector: "app-studenttable",
  templateUrl: "./studenttable.component.html",
  styleUrls: ["./studenttable.component.css"]
})
export class StudenttableComponent implements OnInit {
  public responseData:any;

  constructor(private _globalService: GlobalService) {}
getStudenDataAPI(){
  this._globalService.getStudentsdata().subscribe(response => {
    this.responseData = response["data"];
  });
}
  delete(id){
    alert(id)
  }
  ngOnInit() {
    this.responseData = []
    this.getStudenDataAPI()
  }
}
