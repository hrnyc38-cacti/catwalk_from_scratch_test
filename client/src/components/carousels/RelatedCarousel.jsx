import React from "react";
import axios from "axios";
import RelatedProductCard from './RelatedProductCard.jsx';
import Carousel from 'react-elastic-carousel';
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
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.productId}/related`,
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
    var breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 500, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 }
    ];
    return (
      <div>
        <h3>RELATED PRODUCTS</h3>
        <Carousel breakPoints={breakPoints} >
          {this.state.relatedDataID.map(product => {
            return (
              <RelatedProductCard key={product} productID={product} cardOnClick={this.props.cardOnClick} />
            );
          })}
        </Carousel >
      </div>
    );
  }
};
export default RelatedCarousel;