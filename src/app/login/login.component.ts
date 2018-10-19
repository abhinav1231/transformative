import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { FormsModule, FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  data: any;
  datas: any;
  email: any;
  password: any;
  rememberMe: boolean;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
        private fb: FormBuilder,
    private http: Http
  ) {
    this.data = 'parent data sharing';
  }

  ngOnInit() {
    this.login_Form();
  }
  login_Form() {
    this.login = this.fb.group({
      'email': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z][-_.a-zA-Z0-9]{2,29}\@((\[[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,15}|[0-9]{1,3})(\]?)$/)])),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(16), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/)])),

    });
  }


  login_apiform() {
    let postData = this.login.value;
    console.log("postData=====>>>",postData)
    this.http.post("http://192.168.0.123:3003/AdminSignIn", postData).
    subscribe((response) => {
        var res=JSON.parse(response["_body"]);
        if (res.statusCode== 200) {
          // alert(JSON.stringify(res));
          localStorage.setItem('adminAddress',res.result.adminAddress)
          this.router.navigate(['/dashboard']);
        } else {
          alert(res.message);
        }
      });
  }

}
