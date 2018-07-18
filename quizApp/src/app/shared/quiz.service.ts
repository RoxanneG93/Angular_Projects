import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  // Properties
  seconds: number;
  timer;
  questProgress: number;

  // The QUESTIONS
  questions = [
    {
      id: 1,
      name: "Question 1",
      options: [
        "answer1",
        "answer2",
        "answer3"
      ],
      answer: "answer1"

    },
    {
      id: 2,
      name: "Question 2",
      options: [
        "answer1",
        "answer2",
        "answer3"
      ],
      answer: "answer2"
    },
    {
      id: 3,
      name: "Question 3",
      options: [
        "answer1",
        "answer2",
        "answer3"
      ],
      answer: "answer3"
    }
  ]

getQuestions(){
  // Get the quetions array
  console.log(this.questions);
}

  // Timestamp 45:30 
  // Need to configure Properties, Http Methods, and Helper Methods
  constructor() { }
}
