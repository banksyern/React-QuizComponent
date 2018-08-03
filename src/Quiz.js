import React, { Component } from 'react';
let quizData = require('./quiz_data.json');
import QuizQuestion from "./QuizQuestion.js";


class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1
    };
  }

  render() {
    return (
    <div>

        {quizData.quiz_questions[0].instruction_text}
        <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}>


        </QuizQuestion>

    </div>
    )
  }

}

export default Quiz;
