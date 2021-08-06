import React from "react";
import axios from 'axios';
import { TOKEN } from './../../config.js';
import RateSum from './RateSum.jsx';


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: {},
      meta: {}
    }
  }
  componentDidMount() {
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=${this.props.productId}`,
      { headers: { Authorization: TOKEN } })
      .then((results) => {
        this.setState({ reviews: results.data });
        //console.log('THIS IS reviews', this.state.reviews);
      })
      .then(() =>
        axios.get(
          `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta/?product_id=${this.props.productId}`,
          { headers: { Authorization: TOKEN } }
        )
      )
      .then((result) => {
        this.setState({ meta: result.data });
        //console.log('THIS IS meta', this.state.meta);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    let isloaded = !!this.state.meta.ratings;
    if (!isloaded) {
      return (
        <div>Loading...</div>
      )
    } else {
      //console.log('meta ', this.state.meta);
      return (
        <div>
          <h5>RATINGS & REVIEWS</h5>
          <RateSum meta={this.state.meta} />
        </div>
      )
    }

  }
};

export default Review;