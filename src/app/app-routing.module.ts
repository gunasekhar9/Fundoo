import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AuthenticationGuard } from './authentication.guard';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes/display-notes.component';
import { GetAllArchiveNoteslistComponent } from './Components/get-all-archive-noteslist/get-all-archive-noteslist.component';
import { GetAllTrashNoteslistComponent } from './Components/get-all-trash-noteslist/get-all-trash-noteslist.component';


const routes: Routes = [
  {path: '', redirectTo: "/login", pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'resetpassword/:token',component:ResetpasswordComponent},
  {path:'home',component:DashboardComponent,canActivate:[AuthenticationGuard],
  children:[{path:'', redirectTo: "notes", pathMatch: 'full' },{path:'notes', component:GetAllNotesComponent},{path: 'display', component:DisplayNotesComponent},{path: 'archiveNotes', component:GetAllArchiveNoteslistComponent},{path: 'trashNotes', component:GetAllTrashNoteslistComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
