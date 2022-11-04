import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoginComponent } from './component/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class SharedWebAPIService {

  
  readonly ApiUrl="https://localhost:7188/api/user";
  readonly PhotoUrl = "D:\myimage";
  constructor(private http:HttpClient) { }

  getProductList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/getproduct');
  }
  checkEmailIsExist(val:any){
    return this.http.get<any>(this.ApiUrl+'/checkemailexist',val);
  }
  saveRegisterDetails(val:any){
    return this.http.post<any>(this.ApiUrl+'/register',val);
  }
  // checkUserIsValid(val:any){
  //   debugger
  //   return this.http.get<any>(this.ApiUrl+'/checkuserisvalid/{email}',val);
  // }
 
  UploadPhoto(val:any){
    return this.http.post(this.ApiUrl+'/user/uploadfile',val);
  }
  getMethod(apiMethod:any,params?:any):Observable<any>{
    debugger
    var apiUrl = this.ApiUrl + apiMethod;
    var response = this.http.get(apiUrl, { params });
    return response;
  }

  // postMethod(apiMethod:any,params?:any):Observable<any>{
  //   debugger
  //   var apiUrl = this.ApiUrl + apiMethod;
  //   var response = this.http.post(apiUrl, { params ,headers :this.generateHeaders});
  //   return response;
  // }

  generateHeaders() {
    return new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json'
      });
  }
     postMethod(apiMethod:any, params:any): Observable<any> {
      debugger
      var apiUrl = this.ApiUrl + apiMethod;
    return this.http.post(apiUrl, params, { headers: this.generateHeaders() })
  }
}
