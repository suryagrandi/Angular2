import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationPageService {

 
    name:string;
    password:number;
    confirmPassword:number;
  token: any;
  message: string;
  code: number;
  status: number;
}
