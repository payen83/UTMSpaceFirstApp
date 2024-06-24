import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titleText: string = "Welcome to UTM Space!";
  cars: Array<any> = [ { model: "Fiat", color: "white" } ];
  
  constructor() {}

  btnClick(){
    var a: number = 4;
    let b = 15;
    if(a >= 5){
      a = a + 1;
      console.log("value for a is: ", a);
      b = 10;
    } else {
      console.log("value for a is: ", a);
    }
    this.arraySample();
  }

  arraySample(){
    let listCar: Array<string> = ["Fiat", "Mercedes", "Proton" ]
    console.log(listCar);
    //first method
    for(let i = 0; i < 3; i++){
      console.log("I love " + listCar[i]);
    }

    //second method
    for (let car of listCar){
      console.log("I have " + car);
    }

    this.arrayObject();
  }

  arrayObject(){
    this.cars = [
      { model: "Fiat", color: "white" },
      { model: "Mercedes", color: "red" },
      { model: "Proton", color: "blue" }
    ];
    console.log("List of cars ==> ", this.cars);
     //this.titleText = "I love to drive " + this.cars[0].color + " " + this.cars[0].model;

    //Made output for 3 cars, example sentence:
    for (let car of this.cars){
      console.log("I love to drive " + car.color + " " + car.model);
    }
  }

}
