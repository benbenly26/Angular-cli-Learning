import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    //alert & confirm 
    let a = "A1 error pops";

    let resultId = confirm('Are you sure you want to delete?');
    console.log(resultId);

    if (resultId === false) {
      location.reload();
    }
    alert(a);

    // adding numbers
    let num1 = 50;
    let num2 = 50;
    let result = num1 + num2;
    console.log(result);

    let firstName = "let>>> Benly"; //string
    let age = 23; // integer
    let isYoung = true; //Boolean
    let lastName; //undefined

    let msg = ("My name is " + firstName + age + " is my age");
    console.log(msg);

    //const one time permenant value
    const name1 = "const>>> Ben";
    console.log(name1);

    //object
    let car = {
      car: "Mustang",
      color: "red",
      year: 2022
    }
    console.log(car);

    //array
    let favColors = ["red", "blue", "orange"]
    console.log(favColors);

    //functions 
    function greenColor() {
      let name = "BenLY";
      let dob = 1999;
      console.log("My dob is " + dob + "and my name is " + name);
    }
    greenColor()

    // Incriment
    let number1 = 10;
    let number2 = 20;
    console.log(++number1);
    console.log(number1);
    // Decriment
    let numberOne = 10;
    let numberTwo = 20;
    console.log(--numberTwo);
    console.log(numberTwo);

    //Logical Operators
    // && And returns true if both operents are true
    // || Or returns true if any one  operents are true 
    // ! Not

    let highIncome = true;
    let CIBILScore = true;
    let eligiblePerson = highIncome && CIBILScore;
    console.log("Ur Status is " + eligiblePerson);

    // if else

    let wheather = "cold";

    if (wheather === "hot") {
      console.log("wheather is Hot")
    }
    else {
      console.log("wheather is cold")
    }

    // ts >>> type script
    let y: string = "Ben";
    let x: number = 5;
    x = 10;
    console.log("my name is", y, "and my age is", x);


    //objects
    let details = {
      id: 10,
      name: 'BenLY',
      isYoung: true,
    }
    console.log(details);

    // function
    function greeting(user: string) {
      return "welcome " + user;
    }
    let people: string = 'BenLY'
    console.log(greeting(people));

    let user = 25;
    if (user < 15) {
      console.log("play 15 years old songs");
    }
    else if (user <= 30) {
      console.log("play 30 years old songs");
    }
    else {
      console.log("play 50 years old songs");
    }

    let userId = 130;
    switch (userId) {
      case 20:
        console.log("welcome");
        break;
      case 30:
        console.log("hello world");
        break;
      default:
        console.log("this is value");
    }

    //var >>> variable can be redeclared
    var id = "cm";
    console.log(id)
    var id = "benlycm";
    console.log(id)
    var id = "need to go";
    console.log(id)

    //let >> variable cannot be redeclared
    let data = "Apple";
    let data1 = "Grapes";
    // let data = "banana"; >>> variable cannot be redeclared
    data = "Orange";
    console.log("My fav fruit is", data, "and", data1)

    // const 
    const nameId = "happy world clown me"; //const inside values cannot be replaced 
    console.log(nameId)

    // let redeclared eg >>>
    let adata = "something";
    adata = "changed";
    console.log(adata);

    // loops
    // For loop
    for (let i = 1; i < 5; i++) {
      console.log("The value of sum is " + i)
    }

    // in >>> index of the element
    // off >>> shows the value of the element

    // in >> it will shows the element of the list
    let ben = [10, 20, 30, 40];
    for (let i in ben) {
      console.log(i);
    }
    // off >> it will shows the value in the list
    let benly = [10, 20, 30, 40];
    for (let i of benly) {
      console.log(i);
    }

    
    //BenLY
    
    
    

    
  
    
    
    
    
    
    
    
    
    
  }
}
