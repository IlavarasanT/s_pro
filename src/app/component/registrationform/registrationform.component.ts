import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  public fullName:string='';
  constructor() { }
  user_name: string = '';
  
  isShowLoader: boolean = false;
  patternname="^[a-zA-Z]+$";
  numpattern="/^[0-9]+$/";
  form = new FormGroup({                                               
     fname: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern(this.patternname)]),
     lname: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern(this.patternname)]),
    phnm: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required,Validators.email]),
    password:new FormControl ('',[Validators.required,Validators.minLength(8),Validators.maxLength(20), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,20}')]),
    add: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
  
  clickme() {
    console.log('it does nothing',this.user_name);
  }
  ngOnInit(): void {
  }
  addRegister(){
    var values=this.user_name;
    console.log(values);
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