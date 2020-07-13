import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ResetComponent } from './reset/reset.component';
import { ActivateaccountComponent } from './activateaccount/activateaccount.component';



const routes: Routes = [
  {
     path:"login",
     component:LoginComponent
  },
  {
    path:"forgot-pass",
    component:ForgotPassComponent
  },
  {
    path:"home-page",
    component:HomePageComponent
  },
  {
    path:"registration-page",
    component:RegistrationPageComponent
  },
  {
    path:"reset",
    component:ResetComponent
  },
  {
    path:"activateaccount",
    component:ActivateaccountComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
