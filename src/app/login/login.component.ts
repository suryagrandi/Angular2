import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  ngOnInit(): void {
  }
  displayName;
  public errorMsg = '';
  public employees: any = [];
  constructor(private fb: FormBuilder, private service: ApiService, private router: Router) {

  }
  ngForm = this.fb.group({
    EmailId: ['', Validators.required],
    Password: ['', Validators.compose([Validators.required])],
  })

  get EmailId() {
    return this.ngForm.controls['EmailId'];
  }

  get Password() {
    return this.ngForm.controls['Password'];
  }

  enroll() {
    debugger;
    this.service.post(this.ngForm.value).subscribe(data => {
      debugger;
      if(data["status"]==200){
       
        this.router.navigate(["/home-page"]);
      }
      else{
        alert(data["message"]);
      }
    
    })
      , (error: any) => {
        this.errorMsg = error.statusText;
      }
  }
activate(){
  debugger;
  if(this.ngForm.value.EmailId==""){
    alert("Kindly provide your EmailId");    
    return true;  
  }
  else{
    this.service.AccountVerify(this.ngForm.value).subscribe(data => {
      debugger;
      if (data["status"] == 200) {      
        alert(data["data"]);
      }
      else {
        alert(data["data"]);
      }
    })
  }
}
}