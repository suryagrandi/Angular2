import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  errorMsg: any;
  

  constructor(private fb: FormBuilder, private servive: ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  ngForm = this.fb.group({
    EmailId: ['', Validators.required],
    Password: ['', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30),
    ])],
    ConfirmPassword: ['', Validators.required],
    Token:['', Validators.required]
  },
    { validator: this.passwordConfirming }
  );
 
  passwordConfirming(c: AbstractControl) {
    if (c.get('Password').value !== c.get('ConfirmPassword').value) {
      return { invalid: true };
    }
  }
  get EmailId() {
    return this.ngForm.controls['EmailId'];
  }

  get Password() {
    return this.ngForm.controls['Password'];
  }

  get ConfirmPassword() {
    return this.ngForm.controls['ConfirmPassword'];
  }

  enroll() {
    debugger;
    this.servive.reset(this.ngForm.value).subscribe(data => {     
      if(data["status"]==200){
        alert(data["data"])
        this.router.navigate(["/login"]);
      }
      else{
        alert(data["data"]);
      }
    },)
      , (error: any) => {
        this.errorMsg = error.statusText;
      }
     
  }
  
}
