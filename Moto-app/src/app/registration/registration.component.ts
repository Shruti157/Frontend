import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from 'src/registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
auth : RegistrationModel;

  constructor() {
    this.auth = new RegistrationModel();
   }

  ngOnInit(): void {

  }
   validate(){
   console.log(this.auth.Username + " = " + this.auth.phonenum + " = " + this.auth.EmailId+ " = " + 
   this.auth.State + " = " + this.auth.Password);
  }
}
