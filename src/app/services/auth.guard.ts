import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.auth.isLoggedIn()) {
        return true;
      }
      window.alert('You don\'t have permission to view this page');
      document.location.href='/login';
      return false;


  //   var token = localStorage.getItem("Token");
  //   if (token !== undefined && token !== "" && token != null) {
  //     return true;
  //   }
  //   this.router.navigate(['/login']);
  // }
  // gettoken(){  
  //   return !!localStorage.getItem("SeesionUser");  
  // } 
  
  
}

}
