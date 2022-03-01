import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  forgotpasswordForm:FormGroup;
  submitted=false;
  public showPassword: boolean = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.forgotpasswordForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
    });
  }

  forgotpassword(){
    if(this.forgotpasswordForm.valid){

      console.log(this.forgotpasswordForm.value);
      //calling api in this place
    }else{
      console.log("form is not valid, please fill the form correctly");
      return;
    }
  }

}
