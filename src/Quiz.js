import React, { Component } from 'react';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1
    };
console.log(quizData);
  }

  render() {
    return (
    <div className="QuizQuestion">
      <div>
        {quizData.quiz_questions[0].instruction_text}
      </div>
    </div>
    )
  }

}

export default Quiz;
