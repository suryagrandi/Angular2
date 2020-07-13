import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activateaccount',
  templateUrl: './activateaccount.component.html',
  styleUrls: ['./activateaccount.component.css']
})
export class ActivateaccountComponent implements OnInit {
  errorMsg: any;
 
  constructor(private fb: FormBuilder, private servive: ApiService, private router: Router) { }
 
  ngOnInit(): void {
  }
 
  ngForm = this.fb.group({
    EmailId: ['', Validators.required],
    Token: ['', Validators.required]
  })
 
  get EmailId() {
    return this.ngForm.controls['EmailId'];
  }
 
  get Token() {
    return this.ngForm.controls['Token'];
  }
 
  enroll() {
    debugger;
    
    this.servive.ActivateAccount(this.ngForm.value).subscribe(data => {
      debugger;
      if (data["status"] == 200) {
        alert(data["data"]);
        this.router.navigate(["/"]);
      }
      else {
        alert(data["message"]);
      }
    })
      , (error: any) => {
        this.errorMsg = error.statusText;
      }
  }
}