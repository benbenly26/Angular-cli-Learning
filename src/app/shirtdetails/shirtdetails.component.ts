import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shirtdetails',
  templateUrl: './shirtdetails.component.html',
  styleUrls: ['./shirtdetails.component.css']
})
export class ShirtdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert("Page is under maintenance");
    console.log("error");
   }
}
