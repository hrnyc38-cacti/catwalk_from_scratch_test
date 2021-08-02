import React from "react";
import axios from 'axios';
//import { TOKEN } from './config.js';
import { TOKEN } from './../../config.js';
import Search4answer from './Search4answer.jsx';
import QandAList from './QandAList.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: {}
    }
  }

  componentDidMount() {
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/?product_id=${this.props.productId}`,
      { headers: { Authorization: TOKEN } })
      .then((results) => {
        //console.log(results);
        this.setState({ questions: results.data })
        console.log('THIS IS STATE', this.state.questions)
      })
      .catch((err) => {
        console.log(err);
      })
  }


  render() {
    console.log('THIS IS STATE.result ', this.state.questions.results);
    let isloaded = !!this.state.questions.results;
    if (!isloaded) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div>
          <h5>QUESTIONS & ANSWERS</h5>
          <Search4answer />
          <QandAList questions={this.state.questions.results} productId={this.props.productId} productName={this.props.productName} />

          {/* <button>MORE ANSWERED QUESTIONS</button> */}
          {/* <button>ADD A QUESTION +</button> */}
        </div>
      )
    }
  }
};

export default Questions;