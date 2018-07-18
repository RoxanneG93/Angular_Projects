import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

// Add variables in here typically and DEFINE type casting
showExtended: boolean = true;
users = [];

// Another bool variable to indicate fetch
loaded: boolean = false;
  constructor() { 

  
  }

 


  // Will initialize antthing inside automatically
  ngOnInit() {

    // Replicating fetching users with setTimeout
    // setTimeout(() => {
      this.users = [
        {
          name: 'Bob',
          age: 35,
          location: 'TX'
        },
        {
          name: 'Bobby',
          age: 34,
          location: 'TX'
        },
        {
          name: 'Bobeh',
          age: 37,
          location: 'TX'
        }
    
      ];
      // Seting loaded to true
      this.loaded = true;
      
    // }, 2000)

    // this.users = [
    //   {
    //     name: 'Bob',
    //     age: 35,
    //     location: 'TX'
    //   },
    //   {
    //     name: 'Bobby',
    //     age: 34,
    //     location: 'TX'
    //   },
    //   {
    //     name: 'Bobeh',
    //     age: 37,
    //     location: 'TX'
    //   }
  
    // ]
    // // Changing the boolean
    // this.showExtended = false;


    // Creating another user on the spot cuz of OnInit --had to comment out setTimeout
    this.addUser({
      name: 'Bilbo',
      age: 44,
      // location: 'The Shire'
    })

  }

  
  // a method to add User
  addUser(user){
    this.users.push(user);
  }

}
