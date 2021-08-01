import React from "react";
import Answers from './Answers.jsx';
import axios from 'axios';
import {TOKEN} from './../../yuki.js';
import AnsModal from './AnsModal.jsx';

class QnA extends React.Component {
  //console.log('THIS IS INDIVIDUAL Q ', question);
  constructor(props) {
    super(props);
    this.state = {
      isHelpful: false,
      counter: this.props.question.question_helpfulness,
      showModal: false
    };
  }
  handleHelpful(e) {
    if (!this.state.isHelpful) {

      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/${this.props.question.question_id}/helpful`, null,
      {headers: {Authorization: TOKEN}})
        .then(
          this.setState({
            isHelpful: true,
            counter: this.state.counter + 1
          })
        )
        .catch((err) => {
          console.log(err);
        });
    }
  }
  handleShowModal () {
    console.log('button was clicked!');
    this.setState({
      showModal: true
    })
  }
  handleHideModal () {
    this.setState({
      showModal: false
    })
  }
  render() {
    return (
      <li>
        <div>
          <strong>Q: {this.props.question.question_body}</strong>
          <span>Helpful? <button onClick={this.handleHelpful.bind(this)}>Yes {`(${this.state.counter})`}</button></span>
          <span>
             | <button onClick={this.handleShowModal.bind(this)}>Add Answer</button>
               <AnsModal show={this.state.showModal} onClose={this.handleHideModal.bind(this)} qId={this.props.question.question_id}/>
          </span>
        </div>
        <div>A: <Answers answers={this.props.question.answers}/></div>
      </li>
    )
  }
}





export default QnA;