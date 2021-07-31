import React from "react";
import Answers from './Answers.jsx';
import axios from 'axios';
import {TOKEN} from './../../yuki.js';

class QnA extends React.Component {
  //console.log('THIS IS INDIVIDUAL Q ', question);
  constructor(props) {
    super(props);
    this.state = {
      isHelpful: false,
      counter: this.props.question.question_helpfulness
    };
  }
  handleHelpful(e) {
    if (!this.state.isHelpful) {
      this.setState({
        isHelpful: true,
        counter: this.state.counter + 1
      });
      //invoke func (this.props.answer.helpfulness +1) in index.js
      // let options = {
      //   type: 'put',
      //   url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/${this.props.question.question_id}/helpful`,
      //   headers: {
      //     'Authorization': TOKEN
      //   }
      // }
      // axios(options)
      //   .catch((err) => {
      //     console.log('failed to increment helpfulness ', err);
      //   })
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/${this.props.question.question_id}/helpful`,
      {headers: {Authorization: TOKEN}})
        .catch((err) => {
          console.log(err);
        });
    }
  }
  render() {
    return (
      <li>
        <div>
          <strong>Q: {this.props.question.question_body}</strong>
          <span>Helpful? <button onClick={this.handleHelpful.bind(this)}>Yes {`(${this.state.counter})`}</button></span>
          <span> | <button>Add Answer</button></span>
        </div>
        <div>A: <Answers answers={this.props.question.answers}/></div>
      </li>
    )
  }
}





export default QnA;