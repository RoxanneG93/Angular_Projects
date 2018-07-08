import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  user : {
    firstName: string,
    lastName: string,
    age: number,
    address: {
      street: string,
      city: string,
      state: string
    }
  }
  constructor() { 
  // console.log('contructor ran..');
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
      }
    }



  }
  // ngOnInit() {
  //   console.log('ngOnInit ran ..');

 

  // Method Example
  // addNumber(num1: number, num2: number): number{
  //   return num1 + num2;
  // }

  // onClick(){
  //   this.name='Brad Traversy';
  //   this.hobbies.push('New hobby');
  // }

  // addHobby(hobby){
  //   console.log(hobby);
  //   this.hobbies.unshift(hobby);
  //   // return false;
  // }

  // deleteHobby(hobby){
  //   for (let i = 0; i < this.hobbies.length; i++){
  //     if(this.hobbies[i] == hobby){
  //       this.hobbies.splice(i, 1);
  //     }
  //   }
  // }

}

