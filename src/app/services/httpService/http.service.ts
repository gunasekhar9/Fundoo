import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BaseUrl = environment.BaseUrl;
  token:any;

  constructor(private http:HttpClient) { }

  postService(url:string ,reqData:any, token: boolean=false, httpOptions: any={})
  { 
    return this.http.post(this.BaseUrl + url, reqData, token && httpOptions);
  }

  getService(url:string,token: boolean=false, httpOptions: any={})
  {
    return this.http.get(this.BaseUrl + url, token && httpOptions)
  }

  putService(){

  }

  deleteService(url:string, token: boolean=false, httpOptions: any={}){
    return this.http.delete(this.BaseUrl + url, token && httpOptions)

  }

}
