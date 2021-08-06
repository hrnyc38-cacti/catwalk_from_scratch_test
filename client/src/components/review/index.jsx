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
      .then(() => {
        this.props.passRatings(this.state.meta.ratings);
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
    let isloaded = !!this.state.meta.ratings;
    if (!isloaded) {
      return (
        <div>Loading...</div>
      )
    } else {
      //console.log('meta ', this.state.meta);
      return (
        <div>
<<<<<<< HEAD
          <h5 id="reviews">RATINGS & REVIEWS</h5>
=======
          <h5 className="section-head">RATINGS & REVIEWS</h5>
>>>>>>> 30bc4bd6f9c00c9fb0c97948f2391992f9b69f85
          <RateSum meta={this.state.meta} />
          <br/>
        </div>
      )
    }

  }
};

export default Review;