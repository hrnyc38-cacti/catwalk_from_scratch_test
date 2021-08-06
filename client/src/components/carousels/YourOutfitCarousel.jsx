import React from "react";
import axios from "axios";
import YourOutfitCard from './YourOutfitCard.jsx';
import Carousel from 'react-elastic-carousel';
import { TOKEN } from './../../config.js';


class YourOutfitCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outFits: []
    };
    this.addOutfit = this.addOutfit.bind(this);
  }
  addOutfit() {
    var currentOutfit = this.state.outFits.slice();
    currentOutfit.push(this.props.productId);
    this.setState({ outFits: currentOutfit });
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
        <h3>Your Outfit</h3>
        <Carousel breakPoints={breakPoints}>
          <YourOutfitCard handleClick={this.addOutfit} />
          {this.state.outFits.map((product) => {
            return <YourOutfitCard productID={product} />
          })}
        </Carousel>
      </div>
    );
  }
}
export default YourOutfitCarousel;