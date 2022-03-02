import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetpasswordForm: FormGroup;
  submitted = false;
  public showpassword: boolean = false;
  token:any;

  constructor(private formBuilder: FormBuilder, private userService:UserService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    this.resetpasswordForm = this.formBuilder.group({
      Npassword:['',[Validators.required,Validators.minLength(6)]],
      confirm:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  resetpassword(){
    if(this.resetpasswordForm.valid){
      let reqData = {
        newPassword:this.resetpasswordForm.value.Npassword
       }
      console.log(this.resetpasswordForm.value);
      //calling api in this place
      this.userService.resetpassword(reqData,this.token).subscribe((response:any)=>{
        console.log("resetpassword",response);
      },error =>{
        console.log(error);
      })
    }else{
      console.log("form is not valid, please fill the form correctly");
      return;
    }
  }


  public checkboxPassword(): void {
    this.showpassword = !this.showpassword;
  }

}
