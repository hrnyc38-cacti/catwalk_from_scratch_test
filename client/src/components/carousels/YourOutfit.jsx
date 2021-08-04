import React from "react";
import axios from "axios";
import Card from './Card.jsx';
import Carousel from 'react-elastic-carousel';
import { TOKEN } from './../../config.js';


class YourOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outFits: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    var currentOutfit = this.state.outFits.slice();
    currentOutfit.push(this.props.productId);
    this.setState({outFits: currentOutfit});
  }

  render() {
    return (
      <div>
        <h3>Your Outfit</h3>
        {this.state.outFits.length > 0 ? <Card productID= {this.props.productId} />: <Card /> }
      </div>
    );
  }
}

export default YourOutfit;