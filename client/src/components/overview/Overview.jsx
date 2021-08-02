import React from "react";
import { TOKEN } from '/config.js';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import StyleSelection from './StyleSelection.jsx';
import ProductSelectors from './ProductSelectors.jsx';
import Carousel from './Carousel.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProduct: {},
      currentPhoto: '',
      productStyles: {}

    };
  }

  componentDidMount() {
    this.setState({ currentProduct: this.props.currentProduct });
    let options = {
      type: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.currentProduct.id}/styles`,
      headers: {
        //'User-Agent': 'request',
        'Authorization': TOKEN
      }
    };
    axios(options)
      .catch((err) => {
        console.error(err);
      })
      .then((stylesResults) => {
        this.setState({
          productStyles: stylesResults.data.results,
          currentPhoto: stylesResults.data.results[0].photos.[0].url,
          currentProduct: this.props.currentProduct
        })
        console.log(this.state.productStyles);
        console.log(this.state.currentProduct);
      });
  }

  // componentDidUpdate(prevProps) {
  //   prevProps !== this.props ? this.initializeOverview() : null
  // }

  initializeOverview() {
    // let options = {
    //   type: 'GET',
    //   url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.currentProduct.id}/styles`,
    //   headers: {
    //     //'User-Agent': 'request',
    //     'Authorization': TOKEN
    //   }
    // };
    // axios(options)
    //   .catch((err) => {
    //     console.error(err);
    //   })
    //   .then((stylesResults) => {
    //     this.setState({
    //       productStyles: stylesResults.data.results,
    //       currentPhoto: stylesResults.data.results[0].photos.[0].url,
    //       currentProduct: this.props.currentProduct
    //     })
    //     console.log(this.state.productStyles);
    //     console.log(this.state.currentProduct);
    //   });
  }

  render() {
    return (

      <div>
        <Carousel currentPhoto={this.state.currentPhoto} />
        <ProductInfo name={this.state.currentProduct.name} category={this.state.currentProduct.category} price={this.state.currentProduct.default_price} />
        <StyleSelection />
        <ProductSelectors />
        <span></span>
      </div>
    )
  }
}

export default Overview;