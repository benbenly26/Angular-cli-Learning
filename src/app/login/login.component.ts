import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  email: any;
  password: any;
 onSubmit(){
  alert("Please fill the Following Places");
  console.log('Form have errors' + this.email);
  console.log('Form have errors' + this.password);
 }
}



