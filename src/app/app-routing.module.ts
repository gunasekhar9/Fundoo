import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'forgotpassword',component:ForgotpasswordComponent},
{path:'resetpassword/:token',component:ResetpasswordComponent},
{path:'home',component:DashboardComponent,canActivate:[AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
