import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetpasswordForm:FormGroup;
  submitted=false;
  public showpassword: boolean = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.resetpasswordForm = this.formBuilder.group({
      password:['',[Validators.required,Validators.minLength(6)]],
      confirm:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  resetpassword(){
    if(this.resetpasswordForm.valid){

      console.log(this.resetpasswordForm.value);
      //calling api in this place
    }else{
      console.log("form is not valid, please fill the form correctly");
      return;
    }
  }


  public checkboxPassword(): void {
    this.showpassword = !this.showpassword;
  }

}
