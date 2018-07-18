import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  constructor(private router: Router, private quizService: QuizService) { }

  ngOnInit() {
    // set second here Timestamp 58:26
    // setting progress
    this.quizService.questProgress = 0;
    this.quizService.getQuestions();
    // Call Timer function here
  }

  // startTimer METHOD goes here
  // Timestamp 57:48

  Answer(qID, choice){

  }

}
