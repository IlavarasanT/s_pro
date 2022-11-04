import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    var token = localStorage.getItem("Email");
    if (token !== undefined && token !== "" && token != null) {
      return true;
    }
      return false;
  }
}
