import React from "react";
import axios from 'axios';
//import { TOKEN } from './config.js';
import { TOKEN } from './../../config.js';
import SearchPage from './SearchPage.jsx';
//import QandAList from './QandAList.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/?product_id=${this.props.productId}`,
      { headers: { Authorization: TOKEN } })
      .then((results) => {
        //console.log(results);
        this.setState({ questions: results.data })
        //console.log('THIS IS STATE', this.state.questions)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Previous props ', prevProps);
    if (prevProps.productId !== this.props.productId) {
      console.log('id props has changed.');
      this.componentDidMount();
    }
  }


  render() {
    //console.log('THIS IS STATE.result ', this.state.questions.results);
    console.log('THIS IS New STATE.productId ', this.props.productId);
    let isloaded = !!this.state.questions.results;
    if (!isloaded) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div>
          <h5>QUESTIONS & ANSWERS</h5>
          <SearchPage questions={this.state.questions.results} productId={this.props.productId} productName={this.props.productName} />
          {/* <QandAList questions={this.state.questions.results} productId={this.props.productId} productName={this.props.productName} /> */}

          {/* <button>MORE ANSWERED QUESTIONS</button> */}
          {/* <button>ADD A QUESTION +</button> */}
        </div>
      )
    }
  }
};

export default Questions;