import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedWebAPIService } from 'src/app/shared-web-api.service';
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

  constructor(private service:SharedWebAPIService) { }
  email_address: string = '';
  password: string = '';
  ngOnInit(): void {
   
  }
  onSubmit() {
    debugger
   var email=this.email_address;
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.isShowLoader = true;
      
      var val={email:this.email_address};
      this.service.checkUserIsValid(val).subscribe(res=>{
        alert(res.toString())
        alert("Login Success !!!");

      });
      // this.service.checkUserIsValid("api/user/checkuserisvalid", val).subscribe((res: any) => {});

         
        }
        else {
          //alert("Invalid Credentials!!!");
        }
    
    }
  }


