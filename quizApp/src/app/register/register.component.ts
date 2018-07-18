import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  // REGEX EMAIL PATTERN GOES HERE
  // Timestamp 21:07

  // emailPattern = "GOESHERE"

  constructor(private quizService: QuizService, private route : Router) { }

  ngOnInit() {
  }
  // Must SET UP WEB API AND SQL DB
// TimeStamp 48:14
  // onSubmit(name: string, email:string){

  //   // insertParticipant comes from quiz services - HTTP request
  //   this.quizService.insertParticipant(name,email).subscribe((data : any) => {

  //     // Navigate to different comp when method fires
  //     this.route.navigate(['/quiz']);
  //   })
  // }

  // Temp func
  onSubmit(){

    // Navigate to different comp when method fires
     this.route.navigate(['/quiz']);
  }

}
