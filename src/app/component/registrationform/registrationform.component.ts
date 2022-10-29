import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedWebAPIService } from 'src/app/shared-web-api.service';
@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  public fullName:string='';
  constructor(private service:SharedWebAPIService) { }
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
  firstName: string = '';
  lastName: string = '';
  email_address: string = '';
  password: string = '';
  address: string = '';
  phoneNumber: string = '';

  
  onSubmit() {
   var val={FirstName:this.firstName,LastName:this.lastName,Email:this.email_address,Password:this.password,Address:this.address,PhoneNumber:this.phoneNumber};
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.isShowLoader = true;
      this.service.saveRegisterDetails(val).subscribe(res=>{
        alert("Registered Successfully !!!");
        document.location.href='/login';

      });

        }
        else {
          alert("Check and Fill the Details!!!");
        }
    
    }

    checkEmailAddress(event:any){
      this.service.getMethod('/getemail?email=' + this.email_address +'').subscribe((response:any)=>{
        if(response != undefined && response != null && response.email==this.email_address){
         alert("already you are registered!! please login....click the ok button it will redirect to login page.")
        }
        else{

        }
      })
    }

}