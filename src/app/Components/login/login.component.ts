import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthguardService } from 'src/app/authguard.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.Component.html',
  styleUrls: ['./login.Component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted=false;
  user='1';
  public showPassword: boolean = false;

  constructor(private formBuilder:FormBuilder, private userService:UserService, private authguardservice:AuthguardService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
    //localStorage.setItem("token",this.user)
    //localStorage.setItem('first  Name')
  }

//   canActivate(): boolean {  
//     if (!this.authguardservice.gettoken()) {  
//         this.router.navigate(["/login"]);  
//     }  
//     return this.authguardservice.gettoken();  
// }  

  login(){
    if(this.loginForm.valid){
      let reqData = 
      {
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }

      console.log(this.loginForm.value);
      this.userService.login(reqData).subscribe((Response:any)=>{
        console.log("login Successfull", Response);
        localStorage.setItem("token", Response.id)
        this.router.navigate(['/home']);
      },error =>{
        console.log(error);
      })      
    }
    else{
      console.log("Form is not valid. Fill the form correctly");
      return;
    }
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
