import { Component, OnInit } from '@angular/core';
import { QuizApiService } from '../quiz-api.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: any = [];
  ans = false;
  num = 0;
  score = 0;
  constructor(private api:QuizApiService) { }

  ngOnInit(): void {
    this.start();
  }

  start() {
    this.questions = [];
    this.api.getQuestions().subscribe(res => {
      let quiz = res.results;
      for(let i=0;i<quiz.length;i++){
        quiz[i].incorrect_answers.push(quiz[i].correct_answer);
        quiz[i].incorrect_answers.sort(() => .5 - Math.random());
      }
      console.log(quiz);
      this.questions = quiz;
      this.num = 0;
      this.score = 0;
      console.log(this.questions);
    })
  }
  checkanswer(correct_ans: String, user_ans: String ) {
    this.ans = correct_ans == user_ans ? true : false;
    if(this.ans) this.score +=1;
    this.num < this.questions.length ? this.num+=1 : null;
  }

}
