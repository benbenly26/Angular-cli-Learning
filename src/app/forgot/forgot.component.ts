import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Please fill the Following Places");
    console.log('search email');
  }

}
