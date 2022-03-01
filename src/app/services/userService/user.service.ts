import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { ResetpasswordComponent } from 'src/app/Components/resetpassword/resetpassword.component';
import { SignupComponent } from 'src/app/Components/signup/signup.component';
import { HttpService } from '../httpService/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }
  signup(data:any)
{
  let headersObject= {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  }
 console.log("signup called in service user",data);
 this.httpService.postService('/user/userSignUp',data,false,headersObject)

}
login(data:any)
{
  let headersObject= {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  }
 console.log("login called in service user",data);
 this.httpService.postService('/user/login',data,false,headersObject)
}
forgotpassword()
{
  
}
resetpassword()
{
    
}
}