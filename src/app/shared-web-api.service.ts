import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from './component/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class SharedWebAPIService {

  
  readonly ApiUrl="https://localhost:7188/api/user"
  constructor(private http:HttpClient) { }

  getRegisterList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/getregister');
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
    return this.http.post(this.ApiUrl+'/Employee/SaveFile',val);
  }
  getMethod(apiMethod:any,params?:any):Observable<any>{
    var apiUrl = this.ApiUrl + apiMethod;
    var response = this.http.get(apiUrl, { params });
    return response;
  }


}
