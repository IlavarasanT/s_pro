import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedWebAPIService } from 'src/app/shared-web-api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShowLoader: boolean = false;
  patternname="^[a-zA-Z]+$";
  numpattern="/^[0-9]+$/";
  form = new FormGroup({                                               
    
    email: new FormControl('', [Validators.required,Validators.email]),
    password:new FormControl ('',[Validators.required,Validators.minLength(8),Validators.maxLength(20), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,20}')]),
   
  });

  constructor(private service:SharedWebAPIService,private http:HttpClient) { }
  email_address: string = '';
  password: string = '';
  ngOnInit(): void {
   
  }
  onSubmit() {
   var email=this.email_address;
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.isShowLoader = true;
      
      var val={email:this.email_address};

      this.service.getMethod('/checkuser?email=' + this.email_address +'').subscribe((response:any)=>{
        if(response != undefined && response != null && response.email==this.email_address && response.password==this.password){
          alert("Login Success !!!");
        document.location.href='/mainpage';
        }
        else if(response != undefined && response != null && (response.email==this.email_address||response.password==this.password)){
          alert("Please check the email and password is correct or not!! !!!");
        }
        else{
          alert('User Doesnt exists');
        }
      })
      // this.service.checkUserIsValid(val).subscribe(res=>{
      //    alert("Login Success !!!");
      //    document.location.href='/mainpage';
        
      // });
         
        }
        else {
          alert("Invalid Credentials!!!");
        }
    
    }
  }


