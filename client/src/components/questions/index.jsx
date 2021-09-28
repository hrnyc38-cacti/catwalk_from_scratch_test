import React from "react";
import axios from 'axios';
import { TOKEN } from './../../config.js';
import SearchPage from './SearchPage.jsx';

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
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/qa/questions/?product_id=${this.props.productId}`,
      { headers: { Authorization: TOKEN } })
      .then((results) => {
        this.setState({ questions: results.data })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.productId !== this.props.productId) {
      this.componentDidMount();
    }
  }


  render() {
    let isloaded = !!this.state.questions.results;
    if (!isloaded) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div>
          <h5 className="section-head">QUESTIONS & ANSWERS</h5>
          <SearchPage questions={this.state.questions.results} productId={this.props.productId} productName={this.props.productName} />
          <br />
        </div>
      )
    }
  }
};

export default Questions;