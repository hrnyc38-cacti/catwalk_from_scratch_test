import React from "react";
import axios from 'axios';
import {TOKEN} from './../../yuki.js';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHelpful: false,
      count: this.props.answer.helpfulness
    }
  }
  handleHelpful(e) {
    if (!this.state.isHelpful) {
      this.setState({
        isHelpful: true,
        count: this.state.count + 1
      });
      //invoke func (this.props.answer.helpfulness +1) in index.js
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/answers/${this.props.answer.id}/helpful`,
      {headers: {Authorization: TOKEN}})
      .catch((err) => {
        console.log(err);
      })
    }
  }

  render() {
    return (
      <li>
        <div>{this.props.answer.body}</div>
        <div>
          <span>by {this.props.answer.answerer_name}, {this.props.answer.date.slice(0, 10)}</span>
          <span> | Helpful? <button onClick={this.handleHelpful.bind(this)}>Yes {`(${this.state.count})`}</button></span>
          <span> | <button>Report</button></span>
        </div>
      </li>
    )
  }
}






export default Answer;