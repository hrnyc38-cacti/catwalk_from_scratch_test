import React from "react";
import axios from "axios";
import RelatedProductCard from './RelatedProductCard.jsx';
// import Carousel from 'react-elastic-carousel';
import Slider from './Slider.js'
import { TOKEN } from './../../config.js';

class RelatedCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedDataID: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    this.getRelatedProducts();
  }
  componentDidUpdate(previousProps, previousState, snapShot) {
    if (previousProps !== this.props) {
      this.getRelatedProducts();
    }
  }
  getRelatedProducts() {
    let options = {
      type: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products/${this.props.productId}/related`,
      headers: {
        Authorization: TOKEN
      }
    };
    axios(options)
      .then((res) => {
        this.setState({ relatedDataID: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidUpdate(previousProps, previousState, snapShot) {
    if (previousProps.productId !== this.props.productId) {
      this.componentDidMount();
    }
  }
  render() {
    return (
      <div>
        <h5 className="section-head">RELATED PRODUCTS</h5>
        <Slider relatedProducts={this.state.relatedDataID} cardClick={this.props.cardOnClick} />
      </div>
    );
  }
};
export default RelatedCarousel;