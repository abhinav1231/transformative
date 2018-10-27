import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: FormGroup;
  name: any;
  rollnumber: any;
  teachername: any;
    address: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: Http
  ) {}

  ngOnInit() {
    this.student_form();
  }

  student_form() {
    this.student = this.fb.group({
      'name': new FormControl('', Validators.compose([Validators.required])),
      'rollnumber': new FormControl('', Validators.compose([Validators.required])),
      'teachername': new FormControl('', Validators.compose([Validators.required])),
      'address': new FormControl('', Validators.compose([Validators.required])),
    });
  }


  student_apiform() {
    let postData = this.student.value;
    this.http.post('http://localhost:3000/admin/student', postData).
      subscribe((response) => {
        var res = JSON.parse(response['_body']);
        if (res.statusCode == 200) {
          // alert(JSON.stringify(res));
          localStorage.setItem('adminAddress', res.result.adminAddress);
          this.router.navigate(['/dashboard']);
        } else {
          alert(res.message);
        }
      });
  }

}
