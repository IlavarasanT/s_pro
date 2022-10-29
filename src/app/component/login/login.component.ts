import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
   
  }
  onSubmit() {
   
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.isShowLoader = true;
      
      
         alert("Login Success !!!");

         
        }
        else {
          //alert("Invalid Credentials!!!");
        }
    
    }
  }


