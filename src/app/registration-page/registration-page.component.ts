import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  token: any;
  code: number;
  errorMsg: any;
  displayName: Object;

  data(data: any) {
    throw new Error("Method not implemented.");
  }
  status: number;

  constructor(private fb: FormBuilder, private servive: ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  ngForm = this.fb.group({
    FirstName: ['', Validators.required],
    MiddleName: ['', Validators.required],
    LastName: ['', Validators.required],
    EmailId: ['', [Validators.required, Validators.email, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    // MobileNo: ['', [Validators.required,Validators.pattern("^[7-9][0-9]{9}$")]],
    MobileNo:['',Validators.required],
    UserName: ['', Validators.required],
    Password: ['', Validators.compose([ Validators.required, Validators.minLength(6),Validators.maxLength(30)])],
    ConfirmPassword: ['', Validators.required]
  });

  get FirstName() {
    return this.ngForm.controls['FirstName'];
  }
  get MiddleName() {
    return this.ngForm.controls['MiddleName'];
  }
  get LastName() {
    return this.ngForm.controls['LastName'];
  }
  get EmailId() {
    return this.ngForm.controls['EmailId'];
  }
  get MobileNo() {
    return this.ngForm.controls['MobileNo'];
  }
  get UserName() {
    return this.ngForm.controls['UserName'];
  }
  get Password() {
    return this.ngForm.controls['Password'];
  }
  get ConfirmPassword() {
    return this.ngForm.controls['ConfirmPassword'];
  }
  enroll() {
    debugger;
    this.ngForm.value.MobileNo = Number(this.ngForm.value.MobileNo);

    this.servive.registration(this.ngForm.value).subscribe(data => {
      debugger;
      if (data["status"] = 200) {
        alert(data["data"]);
        this.router.navigate(["/login-page"]);
      }
      else {
        alert(data["data"]);
      }
    })
      , (error: any) => {
        this.errorMsg = error.statusText;
      }
  }

}
