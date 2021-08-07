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
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=${this.props.productId}`,
      { headers: { Authorization: TOKEN } })
      .then((results) => {
        this.setState({ reviews: results.data });
      })
      .then(() =>
        axios.get(
          `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta/?product_id=${this.props.productId}`,
          { headers: { Authorization: TOKEN } }
        )
      )
      .then((result) => {
        this.setState({ meta: result.data });
      })
      .then(() => {
        this.props.passRatings(this.state.meta.ratings);
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
    let isloaded = !!this.state.meta.ratings;
    if (!isloaded) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div>
          <h5 id="reviews" className="section-head">RATINGS & REVIEWS</h5>
          <RateSum meta={this.state.meta} />
          <br />
        </div>
      )
    }

  }
};

export default Review;