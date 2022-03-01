import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.Component.html',
  styleUrls: ['./signup.Component.scss']
})
export class SignupComponent implements OnInit {

  signupForm! : FormGroup;
  submitted=false;
  public showPassword:boolean = false;

  constructor(private formBuilder:FormBuilder, private userservice:UserService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]],
      service:['advance', Validators.required]
    });
  }
  signup(){
    if(this.signupForm.valid){
      let reqData={
        firstname:this.signupForm.value.firstname,
        lastname:this.signupForm.value.lastname,
        email:this.signupForm.value.email,
        password:this.signupForm.value.password,
        service:this.signupForm.value.service }

      console.log(this.signupForm.value);
        // this.userservice.signup(reqData).subscribe((response: any) =>{
        //   console.log(response);
        // },(error: any) =>{
        //   console.log(error);
        // })  


    }
    else{
      console.log("form is not valid, please fill the form correctly");
    return;
    }
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  public checkboxPassword(): void {
    this.showPassword = !this.showPassword;
  }
}