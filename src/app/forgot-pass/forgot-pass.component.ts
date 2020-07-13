import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
  errorMsg: any;

  constructor(private fb: FormBuilder, private service: ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  ngForm = this.fb.group({
    EmailId: ['', Validators.required],   
  })

  get EmailId() {
    return this.ngForm.controls['EmailId'];
  }

  enroll() {
    debugger;
    this.service.forgotpassword(this.ngForm.value).subscribe(data => {
      if(data["status"]==200){
        alert(data["data"])
        this.router.navigate(["/login"]);
      }
      else{
        alert(data["data"]);
      }
    })
      , (error: any) => {
        this.errorMsg = error.statusText;
      }
  }
}
