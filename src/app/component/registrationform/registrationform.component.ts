import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  public fullName:string='';
  constructor() { }
  user_name: string = '';
  clickme() {
    console.log('it does nothing',this.user_name);
  }
  ngOnInit(): void {
  }
  addRegister(){
    var values=this.user_name;
    console.log(values);
  }
}
