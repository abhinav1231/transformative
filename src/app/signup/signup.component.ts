import {  Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormControl, FormBuilder,  Validators,  FormGroup,  ReactiveFormsModule} from '@angular/forms';
import { Http } from '@angular/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  data: any;
  datas: any;
  firstname: any;
  lastname: any;
  email: any;
  password: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: Http
  ) {
    this.data = 'parent data sharing';
  }

  ngOnInit() {
    this.signup_form();
  }
  signup_form() {
    this.signup = this.fb.group({
      'firstname': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]{3,32}$/)])),
      'lastname': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]{3,32}$/)])),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z][-_.a-zA-Z0-9]{2,29}\@((\[[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,15}|[0-9]{1,3})(\]?)$/)])),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(16), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/)])),
      'confirmPassword': new FormControl('', Validators.required),
    }, { validator: this.matchingPasswords('password', 'confirmPassword') });
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }


  signup_apiform() {
    let postData = this.signup.value;
    console.log('postData=====>>>', postData )
    this.http.post('http://localhost:4000/admin/signup', postData).
      subscribe((response) => {
        var res = JSON.parse(response['_body']);
        if (res.statusCode == 200) {
          // alert(JSON.stringify(res));
          localStorage.setItem('adminAddress', res.result.adminAddress)
          this.router.navigate(['/dashboard']);
        } else {
          alert(res.message);
        }
      });
  }

}
