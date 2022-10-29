import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { SharedWebAPIService } from 'src/app/shared-web-api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private httpservice:SharedWebAPIService) { }
 
  ngOnInit(): void {
   
  }
  onSubmit(){
    debugger
    this.httpservice.getRegisterList().subscribe(res=>{
      alert(res.toString())
    });
  }

}
