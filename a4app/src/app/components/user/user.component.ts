import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello: any;

  constructor() { 
    console.log('contructor ran..');
  }
  ngOnInit() {
    console.log('ngOnInit ran ..');

    this.name = 'John doe';
    this.age = 30;
    this.email = 'test@test.com'
    this.address = {
      street: '50 Main St',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['write code', 'watch movies', 'listen to music'];
    this.hello = 'hello';
  }

  onClick(){
    this.name='Brad Traversy';
    this.hobbies.push('New hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    // return false;
  }

  deleteHobby(hobby){
    for (let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

}

interface Address {
  street:string,
  city:string,
  state:string
}
