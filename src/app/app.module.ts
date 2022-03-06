import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { IconsComponent } from './Components/icons/icons.component';
import {MatListModule} from '@angular/material/list';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { TakeNotesComponent } from './Components/take-notes/take-notes.component';
import { AuthguardService } from './authguard.service';
import { DisplayNotesComponent } from './Components/display-notes/display-notes/display-notes.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    TakeNotesComponent,
    DisplayNotesComponent,
    IconsComponent,
    GetAllNotesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule

  ],
  providers: [
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }